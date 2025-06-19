import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./_layout.scss";

const Layout = () => {
  return (
    <div className="app">
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
