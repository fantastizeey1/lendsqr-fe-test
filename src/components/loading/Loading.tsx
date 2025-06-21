import React from "react";
import "./_loading.scss";

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
      <p className="loading-text">Loading user details...</p>
    </div>
  );
};

export default Loading;
