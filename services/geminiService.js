// backend/services/geminiService.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeLog(sanitizedLog) {
    const prompt = `You are an expert debugging assistant. Analyze the sanitized log and return ONLY a JSON object with exactly these keys:

{
  "issue_type": "string",
  "root_cause": "string",
  "fix_suggestion": "string",
  "severity": "Low | Medium | High | Critical"
}

Rules:
- All values MUST be plain strings.
- "fix_suggestion" must NOT be an object or array. Combine all steps into one text string.
- Do NOT use markdown or backticks.
- Respond with ONLY the JSON.

Sanitized log:
${sanitizedLog}`;

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
        const result = await model.generateContent(prompt);
        const response = result.response;
        const content = response.text().trim();

        // Remove possible ```json ``` wrappers
        const cleanedContent = content
            .replace(/```json/gi, '')
            .replace(/```/g, '')
            .trim();

        let parsed;
        try {
            parsed = JSON.parse(cleanedContent);
        } catch (e) {
            console.error('Failed to parse Gemini JSON:', cleanedContent);
            throw new Error('GEMINI_INVALID_JSON');
        }

        // Force everything to be strings so frontend never sees [object Object]
        return {
            issue_type: String(parsed.issue_type ?? 'Unknown'),
            root_cause: String(parsed.root_cause ?? 'N/A'),
            fix_suggestion:
                typeof parsed.fix_suggestion === 'string'
                    ? parsed.fix_suggestion
                    : JSON.stringify(parsed.fix_suggestion),
            severity: String(parsed.severity ?? 'Unknown'),
        };
    } catch (error) {
        console.error('Gemini API error:', error);

        // Quota / rate limit
        if (error.status === 429) {
            throw new Error('GEMINI_QUOTA_EXCEEDED');
        }

        throw new Error('GEMINI_GENERAL_ERROR');
    }
}

module.exports = {
    analyzeLog,
};
