# 🚀 AI Log Analyzer – Full-Stack Application  
A simple and powerful log analysis tool built using **React (Vite + TypeScript)** for the frontend and **Node.js + Express** for the backend.  
This application allows users to upload logs, send them to the backend for analysis, and view structured results like errors, warnings, and suggestions.

---

## 🌟 Features

### 🔹 Frontend (React + TypeScript)
- Upload log files
- Preview logs in a clean UI
- Send logs to backend for processing
- Display structured results:
  - Errors
  - Warnings
  - Suggestions
  - Summary
- Beautiful UI with TailwindCSS

### 🔹 Backend (Node + Express)
- Accepts log payload via POST `/analyze-logs`
- Processes/analyzes log text
- Sends structured JSON response
- CORS-enabled for React dev server


## 🗂 Project Structure
project/
│
├── backend/
│ ├── index.js # Node.js backend server
│ ├── package.json
│ └── node_modules/
│
├── src/
│ ├── components/
│ │ └── PreviewModal.tsx
│ ├── utils/
│ │ ├── logParser.ts
│ │ ├── dataRedactor.ts
│ │ └── api.ts # Frontend API function
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
│
├── .env
├── package.json
├── vite.config.ts
└── README.md
