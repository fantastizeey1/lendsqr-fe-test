import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import UserDetails from './pages/UserDetails/UserDetails';
import Layout from './components/Layout';
import LoginPage from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={() => { /* handle login */ }} />} />
        {/* After successful login, navigate to dashboard */}        
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
