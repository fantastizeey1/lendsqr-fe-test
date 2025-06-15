import { useState } from "react";

const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="logo">
            <img src="https://via.placeholder.com/173x36/39CDCC/FFFFFF?text=lendsqr" alt="Lendsqr" />
          </div>
          <div className="login-illustration">
            <img src="https://via.placeholder.com/600x337/F5F5F5/CCCCCC?text=Pablo+sign+in" alt="Login illustration" />
          </div>
        </div>
        <div className="login-right">
          <div className="login-form-container">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <div className="login-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group password-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
              <div className="forgot-password">FORGOT PASSWORD?</div>
              <button onClick={handleLogin} className="login-btn">LOG IN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;