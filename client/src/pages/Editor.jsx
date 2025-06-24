// editor.jsx
import React, { useState } from "react";
import axios from "axios";

const languageOptions = [
  { id: 63, name: "JavaScript" },
  { id: 71, name: "Python" },
  { id: 54, name: "C++" },
  { id: 50, name: "C" },
];

function Editor() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState(71); // Default Python
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    setOutput("Running...");
    try {
      const res = await axios.post("http://localhost:5000/run", {
        code,
        language_id: language,
      });
      if (res.data.stdout) {
        setOutput(res.data.stdout);
      } else if (res.data.stderr) {
        setOutput(res.data.stderr);
      } else {
        setOutput(res.data.compile_output);
      }
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  };

  // Calculate number of lines for line numbers
  const lineCount = code.split('\n').length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1).join('\n');

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-200">
      {/* Top Bar */}
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm">Online Code Compiler</div>
        <div className="w-12"></div> {/* Spacer for balance */}
      </div>

      {/* Editor Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Toolbar */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <select 
            onChange={(e) => setLanguage(Number(e.target.value))}
            className="bg-gray-700 text-gray-200 px-3 py-1 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {languageOptions.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
          <button 
            onClick={handleRun}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
          >
            Run Code
          </button>
        </div>

        {/* Code Editor with Line Numbers */}
        <div className="flex-1 overflow-auto bg-gray-900 p-0 relative">
          <div className="flex h-full">
            {/* Line numbers column */}
            <div 
              className="w-5 bg-gray-800 text-gray-500 text-right pr-2 select-none overflow-hidden font-mono text-sm"
              style={{ lineHeight: '1.5rem' }}
            >
              {lineNumbers}
            </div>
            {/* Code textarea */}
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="// Write your code here..."
              className="flex-1 font-mono text-sm bg-gray-900 text-gray-200 resize-none focus:outline-none pl-2 pt-0.5"
              style={{ 
                lineHeight: '1.5rem',
                tabSize: 2,
                marginLeft: '-1px' // Align with line numbers
              }}
            />
          </div>
        </div>

        {/* Output Panel */}
        <div className="flex flex-col" style={{ height: '40%' }}>
          <div className="bg-gray-800 px-4 py-2 flex items-center border-t border-b border-gray-700">
            <h3 className="text-sm font-medium">Output</h3>
          </div>
          <div className="flex-1 overflow-auto bg-gray-900 p-4">
            <pre className="font-mono text-sm whitespace-pre-wrap">
              {output || <span className="text-gray-500">// Output will appear here</span>}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;