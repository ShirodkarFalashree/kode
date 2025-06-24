import React from "react";
import TutorialPage from "./pages/Tutorial";
import Editor from "../src/pages/Editor";

function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Tutorial Page - Top (mobile) / Left (desktop) */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto bg-gray-50">
        <TutorialPage />
      </div>
      
      {/* Editor - Bottom (mobile) / Right (desktop) */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <Editor />
      </div>
    </div>
  );
}

export default App;