import React, { useState, useEffect } from 'react';
import '../styles/App.scss';

// Types
interface User {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
}

// Mock API data generator
const generateMockUsers = (): User[] => {
  const statuses: User['status'][] = ['Active', 'Inactive', 'Pending', 'Blacklisted'];
  const organizations = ['Lendsqr', 'Irorun', 'Lendstar', 'Paystack', 'Flutterwave'];
  const users: User[] = [];

  for (let i = 1; i <= 500; i++) {
    users.push({
      id: `user-${i}`,
      orgName: organizations[Math.floor(Math.random() * organizations.length)],
      userName: `user${i}`,
      email: `user${i}@example.com`,
      phoneNumber: `+234${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      dateJoined: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      profile: {
        firstName: `FirstName${i}`,
        lastName: `LastName${i}`,
        phoneNumber: `+234${Math.floor(Math.random() * 9000000000) + 1000000000}`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`,
        gender: Math.random() > 0.5 ? 'Male' : 'Female',
        bvn: `${Math.floor(Math.random() * 90000000000) + 10000000000}`,
        address: `${i} Sample Street, Lagos, Nigeria`,
        currency: 'NGN'
      },
      guarantor: {
        firstName: `Guarantor${i}`,
        lastName: `LastName${i}`,
        phoneNumber: `+234${Math.floor(Math.random() * 9000000000) + 1000000000}`,
        gender: Math.random() > 0.5 ? 'Male' : 'Female',
        address: `${i} Guarantor Street, Lagos, Nigeria`
      },
      accountBalance: `₦${(Math.random() * 1000000).toFixed(2)}`,
      accountNumber: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      socials: {
        facebook: `facebook.com/user${i}`,
        instagram: `instagram.com/user${i}`,
        twitter: `twitter.com/user${i}`
      },
      education: {
        level: 'B.Sc',
        employmentStatus: Math.random() > 0.5 ? 'Employed' : 'Unemployed',
        sector: 'FinTech',
        duration: '2 years',
        officeEmail: `user${i}@company.com`,
        monthlyIncome: ['₦200,000.00', '₦400,000.00'],
        loanRepayment: '₦40,000'
      }
    });
  }
  return users;
};

// Components
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

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
          <button className="search-btn">🔍</button>
        </div>
      </div>
      <div className="header-right">
        <a href="#" className="header-link">Docs</a>
        <div className="notifications">🔔</div>
        <div className="user-profile">
          <img src="https://via.placeholder.com/40x40/CCCCCC/FFFFFF?text=U" alt="User" />
          <span>Adedeji</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </div>
  );
};

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>USERS</h3>
            <p className="stat-number">2,453</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👤</div>
          <div className="stat-content">
            <h3>ACTIVE USERS</h3>
            <p className="stat-number">2,453</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💳</div>
          <div className="stat-content">
            <h3>USERS WITH LOANS</h3>
            <p className="stat-number">12,453</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>USERS WITH SAVINGS</h3>
            <p className="stat-number">102,453</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const UsersPage: React.FC<{ users: User[]; onUserClick: (user: User) => void }> = ({ users, onUserClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [filterOrg, setFilterOrg] = useState<string>('');

  const filteredUsers = users.filter(user => {
    return (!filterStatus || user.status === filterStatus) &&
           (!filterOrg || user.orgName === filterOrg);
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active': return 'status-active';
      case 'Inactive': return 'status-inactive';
      case 'Pending': return 'status-pending';
      case 'Blacklisted': return 'status-blacklisted';
      default: return '';
    }
  };

  return (
    <div className="users-page">
      <h1>Users</h1>
      
      <div className="users-stats">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>USERS</h3>
            <p className="stat-number">{users.length.toLocaleString()}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👤</div>
          <div className="stat-content">
            <h3>ACTIVE USERS</h3>
            <p className="stat-number">{users.filter(u => u.status === 'Active').length.toLocaleString()}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💳</div>
          <div className="stat-content">
            <h3>USERS WITH LOANS</h3>
            <p className="stat-number">{Math.floor(users.length * 0.3).toLocaleString()}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>USERS WITH SAVINGS</h3>
            <p className="stat-number">{Math.floor(users.length * 0.8).toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="users-table-container">
        <div className="table-filters">
          <select value={filterOrg} onChange={(e) => setFilterOrg(e.target.value)}>
            <option value="">All Organizations</option>
            <option value="Lendsqr">Lendsqr</option>
            <option value="Irorun">Irorun</option>
            <option value="Lendstar">Lendstar</option>
          </select>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
        </div>

        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>ORGANIZATION</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>PHONE NUMBER</th>
                <th>DATE JOINED</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {displayedUsers.map(user => (
                <tr key={user.id} onClick={() => onUserClick(user)} className="user-row">
                  <td>{user.orgName}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{new Date(user.dateJoined).toLocaleDateString()}</td>
                  <td>
                    <span className={`status ${getStatusClass(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <div className="pagination-info">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of {filteredUsers.length} entries
          </div>
          <div className="pagination-controls">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserDetailsPage: React.FC<{ user: User; onBack: () => void }> = ({ user, onBack }) => {
  return (
    <div className="user-details-page">
      <div className="user-details-header">
        <button className="back-btn" onClick={onBack}>← Back to Users</button>
        <div className="user-details-actions">
          <h1>User Details</h1>
          <div className="action-buttons">
            <button className="blacklist-btn">BLACKLIST USER</button>
            <button className="activate-btn">ACTIVATE USER</button>
          </div>
        </div>
      </div>

      <div className="user-profile-overview">
        <div className="profile-header">
          <div className="profile-info">
            <img src={user.profile.avatar} alt="User Avatar" className="profile-avatar" />
            <div className="profile-details">
              <h2>{user.profile.firstName} {user.profile.lastName}</h2>
              <p>{user.userName}</p>
            </div>
          </div>
          <div className="user-tier">
            <p>User's Tier</p>
            <div className="stars">⭐⭐⭐</div>
          </div>
          <div className="account-balance">
            <h3>{user.accountBalance}</h3>
            <p>{user.accountNumber}/Providus Bank</p>
          </div>
        </div>
      </div>

      <div className="user-details-tabs">
        <div className="tab-nav">
          <button className="tab active">General Details</button>
          <button className="tab">Documents</button>
          <button className="tab">Bank Details</button>
          <button className="tab">Loans</button>
          <button className="tab">Savings</button>
          <button className="tab">App and System</button>
        </div>

        <div className="tab-content">
          <div className="details-section">
            <h3>Personal Information</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>FULL NAME</label>
                <p>{user.profile.firstName} {user.profile.lastName}</p>
              </div>
              <div className="detail-item">
                <label>PHONE NUMBER</label>
                <p>{user.profile.phoneNumber}</p>
              </div>
              <div className="detail-item">
                <label>EMAIL ADDRESS</label>
                <p>{user.email}</p>
              </div>
              <div className="detail-item">
                <label>BVN</label>
                <p>{user.profile.bvn}</p>
              </div>
              <div className="detail-item">
                <label>GENDER</label>
                <p>{user.profile.gender}</p>
              </div>
              <div className="detail-item">
                <label>MARITAL STATUS</label>
                <p>Single</p>
              </div>
              <div className="detail-item">
                <label>CHILDREN</label>
                <p>None</p>
              </div>
              <div className="detail-item">
                <label>TYPE OF RESIDENCE</label>
                <p>Parent's Apartment</p>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h3>Education and Employment</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>LEVEL OF EDUCATION</label>
                <p>{user.education.level}</p>
              </div>
              <div className="detail-item">
                <label>EMPLOYMENT STATUS</label>
                <p>{user.education.employmentStatus}</p>
              </div>
              <div className="detail-item">
                <label>SECTOR OF EMPLOYMENT</label>
                <p>{user.education.sector}</p>
              </div>
              <div className="detail-item">
                <label>DURATION OF EMPLOYMENT</label>
                <p>{user.education.duration}</p>
              </div>
              <div className="detail-item">
                <label>OFFICE EMAIL</label>
                <p>{user.education.officeEmail}</p>
              </div>
              <div className="detail-item">
                <label>MONTHLY INCOME</label>
                <p>{user.education.monthlyIncome.join(' - ')}</p>
              </div>
              <div className="detail-item">
                <label>LOAN REPAYMENT</label>
                <p>{user.education.loanRepayment}</p>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h3>Socials</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>TWITTER</label>
                <p>{user.socials.twitter}</p>
              </div>
              <div className="detail-item">
                <label>FACEBOOK</label>
                <p>{user.socials.facebook}</p>
              </div>
              <div className="detail-item">
                <label>INSTAGRAM</label>
                <p>{user.socials.instagram}</p>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h3>Guarantor</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>FULL NAME</label>
                <p>{user.guarantor.firstName} {user.guarantor.lastName}</p>
              </div>
              <div className="detail-item">
                <label>PHONE NUMBER</label>
                <p>{user.guarantor.phoneNumber}</p>
              </div>
              <div className="detail-item">
                <label>EMAIL ADDRESS</label>
                <p>debby@gmail.com</p>
              </div>
              <div className="detail-item">
                <label>RELATIONSHIP</label>
                <p>Sister</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const mockUsers = generateMockUsers();
    setUsers(mockUsers);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setCurrentPage('user-details');
    // Store user details in local storage
    localStorage.setItem('selectedUser', JSON.stringify(user));
  };

  const handleBackToUsers = () => {
    setSelectedUser(null);
    setCurrentPage('users');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <div className="main-content">
          {currentPage === 'dashboard' && <DashboardPage />}
          {currentPage === 'users' && (
            <UsersPage users={users} onUserClick={handleUserClick} />
          )}
          {currentPage === 'user-details' && selectedUser && (
            <UserDetailsPage user={selectedUser} onBack={handleBackToUsers} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;