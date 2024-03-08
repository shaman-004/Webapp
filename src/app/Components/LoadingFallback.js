// LoadingFallback.js
import React from 'react';

const LoadingFallback = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      <p className="ml-2 text-gray-700">Loading...</p>
    </div>
  );
};

export default LoadingFallback;
