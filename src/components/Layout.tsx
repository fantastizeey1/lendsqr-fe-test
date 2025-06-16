import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import '../styles/App.scss'


const Layout = () => {
  return (
    <div className='app'>
    <div className="layout">
      <Sidebar currentPage="dashboard" onPageChange={() => {}} />
      <div className="main-content">
        <Header />
        <Outlet />
      </div>
    </div>
    </div>
  );
};

export default Layout;
