import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./_sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (key: string) => location.pathname === `/${key}`;

  const menuSections = [
    {
      title: "CUSTOMERS",
      items: [
        { icon: "user.svg", label: "Users", key: "users" },
        { icon: "guarantors.svg", label: "Guarantors", key: "guarantors" },
        { icon: "loan.svg", label: "Loans", key: "loans" },
        { icon: "handshake.svg", label: "Decision Models", key: "handshake" },
        { icon: "savin.svg", label: "Savings", key: "savin" },
        {
          icon: "loan-request.svg",
          label: "Loan Requests",
          key: "loan-requests",
        },
        { icon: "whitelist.svg", label: "Whitelist", key: "whitelist" },
        { icon: "karma.svg", label: "Karma", key: "karma" },
      ],
    },
    {
      title: "BUSINESSES",
      items: [
        { icon: "home.svg", label: "Organization", key: "organization" },
        {
          icon: "Loan Products.svg",
          label: "Loan Products",
          key: "loan-products",
        },
        {
          icon: "Savings Products.svg",
          label: "Savings Products",
          key: "savings-products",
        },
        {
          icon: "Fees and Charges.svg",
          label: "Fees and Charges",
          key: "fees-and-charges",
        },
        {
          icon: "Transactions.svg",
          label: "Transactions",
          key: "transactions",
        },
        { icon: "Services.svg", label: "Services", key: "services" },
        {
          icon: "Service Account.svg",
          label: "Service Account",
          key: "service-account",
        },
        { icon: "Settlements.svg", label: "Settlements", key: "settlements" },
        { icon: "Reports.svg", label: "Reports", key: "reports" },
      ],
    },
    {
      title: "SETTINGS",
      items: [
        { icon: "Preferences.svg", label: "Preferences", key: "preferences" },
        {
          icon: "Fees and Pricing.svg",
          label: "Fees and Pricing",
          key: "fees pricing",
        },
        { icon: "Audit Logs.svg", label: "Audit Logs", key: "audit logs" },
        {
          icon: "Systems Messages.svg",
          label: "Systems Messages",
          key: "system-messages",
        },
      ],
    },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-logo">
        <img src="/logo.svg" alt="Lendsqr" />
        <button className="sidebar-close-btn" onClick={onClose}>
          &times;
        </button>
      </div>

      <div className="sidebar-user">
        <span className="user-icon">
          <img src="/briefcase.svg" alt="Switch Org" />
        </span>
        <span>Switch Organization</span>
        <span className="dropdown-arrow">
          <img src="/down.svg" alt="drop down" />
        </span>
      </div>

      <div className="sidebar-menu">
        {/* Dashboard Link (i.e. Users) */}
        <div
          className={`menu-item ${
            isActive("dashboard") ? "active" : ""
          } dashboard-item `}
          onClick={() => navigate("/dashboard")}
        >
          <span className="menu-icon">
            <img src="/home.svg" alt="Dashboard" />
          </span>
          <span>Dashboard</span>
        </div>

        {/* Menu Sections */}
        {menuSections.map((section) => (
          <div className="menu-section" key={section.title}>
            <h4>{section.title}</h4>
            {section.items.map((item) => (
              <div
                key={item.key}
                className={`menu-item ${isActive(item.key) ? "active" : ""}`}
                onClick={() => navigate(`/${item.key}`)}
              >
                <span className="menu-icon">
                  <img src={`/${item.icon}`} alt={`${item.label} icon`} />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        ))}

        <div className="menu-section logout-section">
          <div className="menu-item">
            <span className="menu-icon">
              <img src="/Logout.svg" alt="Logout" />
            </span>
            <span>Logout</span>
          </div>
          <div className="menu-item">
            <span className="version">v1.2.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
