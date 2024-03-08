// LoadingSpinner.js

import React from 'react';
import './global.css';
const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-message">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
