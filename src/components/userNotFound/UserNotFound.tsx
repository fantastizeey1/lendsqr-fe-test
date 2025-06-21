import React from "react";
import { useNavigate } from "react-router-dom";
import "./_userNotFound.scss";

const UserNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="user-not-found">
      <div className="not-found-content">
        <div className="error-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
              fill={import.meta.env.VITE_DANGER_COLOR || "#E4033B"}
              fillOpacity="0.15"
            />
            <path
              d="M24 28V24M24 20H24.02M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z"
              stroke={import.meta.env.VITE_DANGER_COLOR || "#E4033B"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="title">User Not Found</h2>
        <p className="message">
          The user you're looking for doesn't exist or may have been removed.
        </p>
        <button className="back-button" onClick={() => navigate("/users")}>
          <img src="/back.svg" alt="back" /> Back to Users
        </button>
      </div>
    </div>
  );
};

export default UserNotFound;
