import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./_layout.scss";
import { useState } from "react";

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <div className="layout">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="main-content">
          <Header onToggleSidebar={() => setSidebarOpen(true)} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
