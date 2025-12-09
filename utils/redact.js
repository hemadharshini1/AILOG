const redactSensitiveData = (log) => {
    // IP addresses
    log = log.replace(/(\b\d{1,3}(\.\d{1,3}){3}\b)/g, '[REDACTED_IP]');

    // Emails
    log = log.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}/g, '[REDACTED_EMAIL]');

    // Windows file paths
    log = log.replace(/[A-Za-z]:\\(?:[^\\:*?"<>|\r\n]+\\)*[^\\:*?"<>|\r\n]*/g, '[REDACTED_PATH]');

    // Linux/Unix paths
    log = log.replace(/(\/[A-Za-z0-9._-]+)+/g, '[REDACTED_PATH]');

    // API keys/tokens
    log = log.replace(/\b[A-Za-z0-9]{20,}\b/g, '[REDACTED_KEY]');

    // URLs
    log = log.replace(/https?:\/\/[^\s]+/g, '[REDACTED_URL]');

    // Timestamps
    log = log.replace(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/g, '[REDACTED_TIMESTAMP]');
    log = log.replace(/\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}(:\d{2})?(\s(AM|PM))?/gi, '[REDACTED_TIMESTAMP]');

    return log;
};

module.exports = { redactSensitiveData };
