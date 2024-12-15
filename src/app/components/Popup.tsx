// src/app/components/Popup.tsx

"use client";

import React from "react";

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs w-full relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white focus:outline-none"
          onClick={onClose}
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Message */}
        <p className="text-center text-gray-800 dark:text-gray-200">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Popup;
