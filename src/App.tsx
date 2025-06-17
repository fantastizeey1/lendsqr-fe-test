import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import Users from './pages/Users/Users';
import UserDetails from './pages/UserDetails/UserDetails';

import LoginPage from './pages/auth/Login';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { generateMockUsers } from './utils/mockUsers';
import Layout from './components/layout/Layout';

function App() {
  function LoginRoute() {
    const navigate = useNavigate();
    return <LoginPage onLogin={() => navigate('/users')} />;
  }

  useEffect(() => {
  if (!localStorage.getItem('users')) {
    const users = generateMockUsers();
    localStorage.setItem('users', JSON.stringify(users));
  }
}, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRoute />} />

        {/* Protected Routes */}
        <Route element={<Layout />}>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
