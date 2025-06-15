const Sidebar: React.FC<{ currentPage: string; onPageChange: (page: string) => void }> = ({ currentPage, onPageChange }) => {
  const menuItems = [
    { icon: '🏠', label: 'Dashboard', key: 'dashboard' },
    { icon: '👥', label: 'Users', key: 'users' },
    { icon: '🏦', label: 'Guarantors', key: 'guarantors' },
    { icon: '💰', label: 'Loans', key: 'loans' },
    { icon: '🤝', label: 'Decision Models', key: 'models' },
    { icon: '💳', label: 'Savings', key: 'savings' },
    { icon: '💸', label: 'Loan Requests', key: 'loan-requests' },
    { icon: '👤', label: 'Whitelist', key: 'whitelist' },
    { icon: '🚫', label: 'Karma', key: 'karma' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="https://via.placeholder.com/144x30/39CDCC/FFFFFF?text=lendsqr" alt="Lendsqr" />
      </div>
      <div className="sidebar-user">
        <span className="user-icon">👤</span>
        <span>Switch Organization</span>
        <span className="dropdown-arrow">▼</span>
      </div>
      <div className="sidebar-menu">
        <div className="menu-item dashboard-item" onClick={() => onPageChange('dashboard')}>
          <span className="menu-icon">🏠</span>
          <span>Dashboard</span>
        </div>
        <div className="menu-section">
          <h4>CUSTOMERS</h4>
          {menuItems.slice(1, 4).map(item => (
            <div
              key={item.key}
              className={`menu-item ${currentPage === item.key ? 'active' : ''}`}
              onClick={() => onPageChange(item.key)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="menu-section">
          <h4>BUSINESSES</h4>
          {menuItems.slice(4).map(item => (
            <div
              key={item.key}
              className={`menu-item ${currentPage === item.key ? 'active' : ''}`}
              onClick={() => onPageChange(item.key)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;