import React from 'react';

function TutorialPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Python Tutorial</h1>
          <p className="text-xl text-gray-600">Master python in just one tutorial video</p>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started with Python</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full h-96 rounded-lg"
                src="https://www.youtube.com/embed/_uQrJ0TkZlc?si=GvYDw0u2eeL_YHnP" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Content Below Video */}
        {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What You'll Learn</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>How to set up a React project with Tailwind CSS</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Creating reusable components with Tailwind</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Responsive design techniques</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Best practices for styling React apps</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-medium text-gray-800 mb-1">Official Documentation</h4>
                  <p className="text-sm text-gray-500">React and Tailwind CSS docs</p>
                </a>
                <a href="#" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-medium text-gray-800 mb-1">Starter Templates</h4>
                  <p className="text-sm text-gray-500">Get started quickly</p>
                </a>
                <a href="#" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-medium text-gray-800 mb-1">Community Examples</h4>
                  <p className="text-sm text-gray-500">See what others have built</p>
                </a>
                <a href="#" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-medium text-gray-800 mb-1">Cheat Sheets</h4>
                  <p className="text-sm text-gray-500">Quick reference guides</p>
                </a>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Next Steps</h3>
              <p className="text-blue-700 mb-4">Ready to practice what you've learned? Try building a small project with these concepts!</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">
                Start Coding Challenge
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default TutorialPage;