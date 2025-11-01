import React from "react";
import { FaLock } from "react-icons/fa";

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 max-w-md">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-full">
            <FaLock className="w-10 h-10 text-red-600 dark:text-red-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          403 Forbidden
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          You don’t have permission to access this page.<br />
          Please contact the administrator if you believe this is an error.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg transition-all"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Forbidden;
