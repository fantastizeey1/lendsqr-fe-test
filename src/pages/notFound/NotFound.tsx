// src/pages/NotFound.tsx

import { useNavigate } from "react-router-dom";
import "./_notFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>
          Sorry, the page you're looking for doesn't exist, has been moved, or
          is temporarily unavailable.
        </p>
        <button className="go-back-btn" onClick={() => navigate("/users")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
