import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();



 const handleLogin = async (e?: React.FormEvent) => {
  if (e) e.preventDefault();
  setError('');
  setSuccess('');

  const cleanedEmail = email.trim().toLowerCase();
  const cleanedPassword = password.trim();

  try {
    await fakeAuth(cleanedEmail, cleanedPassword);
    setSuccess('Login successful!');
    navigate('/dashboard');

  } catch {
    setError("Invalid login credentials.");
  }
};


  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="logo">
            <img src="/logo.svg" alt="Lendsqr logo" />
          </div>
          <div className="login-illustration">
            <img src="/hero.svg" alt="Login illustration" />
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-container">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>

            <form onSubmit={handleLogin} className="login-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email"
                />
              </div>

              <div className="input-group password-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-label="Password"
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

              {error && <div className="error-message">{error}</div>}

              <button
                type="submit"
                className="login-btn"
                disabled={!email || !password}
              >
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated fakeAuth logic
function fakeAuth(email: string, password: string): Promise<void> {
  const mockUser = {
    email: "admin@lendsqr.com",
    password: "password123"
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
  console.log("AUTH CHECK:", email, password); 

  if (email === mockUser.email && password === mockUser.password) {
    console.log("Auth success");
    resolve();
  } else {
    console.log("Auth failed");
    reject(new Error("Invalid credentials"));
  }
}, 700);

  });
}


export default LoginPage;
