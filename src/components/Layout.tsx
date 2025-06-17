import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
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
