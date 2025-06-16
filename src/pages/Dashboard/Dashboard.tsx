import { useState } from "react";
import UsersTable from "../../components/Table";

// Mock data - replace with your actual data source
const mockUsers = [
  {
    id: '1',
    orgName: 'Lendsqr',
    userName: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phoneNumber: '08078903721',
    dateJoined: '2020-05-15T10:00:00',
    status: 'Inactive' as const
  },
  {
    id: '2',
    orgName: 'Irorun',
    userName: 'Debby Ogana',
    email: 'debby2@irorun.com',
    phoneNumber: '08160780928',
    dateJoined: '2020-04-30T10:00:00',
    status: 'Pending' as const
  },
  {
    id: '3',
    orgName: 'Lendstar',
    userName: 'Grace Effiom',
    email: 'grace@lendstar.com',
    phoneNumber: '07060780922',
    dateJoined: '2020-04-30T10:00:00',
    status: 'Blacklisted' as const
  },
  {
    id: '4',
    orgName: 'Lendsqr',
    userName: 'Tosin Dokunmu',
    email: 'tosin@lendsqr.com',
    phoneNumber: '07003309226',
    dateJoined: '2020-04-10T10:00:00',
    status: 'Pending' as const
  },
  {
    id: '5',
    orgName: 'Lendstar',
    userName: 'Grace Effiom',
    email: 'grace@lendstar.com',
    phoneNumber: '07060780922',
    dateJoined: '2020-04-30T10:00:00',
    status: 'Active' as const
  },
  {
    id: '6',
    orgName: 'Lendsqr',
    userName: 'Tosin Dokunmu',
    email: 'tosin@lendsqr.com',
    phoneNumber: '08060780900',
    dateJoined: '2020-04-10T10:00:00',
    status: 'Active' as const
  },
  // Add more mock data as needed...
];

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [filterOrg, setFilterOrg] = useState<string>('');

  // Filter users based on status and organization
  const filteredUsers = mockUsers.filter(user => {
    return (!filterStatus || user.status === filterStatus) &&
      (!filterOrg || user.orgName === filterOrg);
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const handleUserClick = (user: any) => {
    console.log('User clicked:', user);
    // Add your user click logic here
  };

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <img src="/users.svg" alt="users icon" />
          </div>
          <div className="stat-content">
            <h3>USERS</h3>
            <p className="stat-number">{mockUsers.length.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <img src="/active.svg" alt="active icon" />
          </div>
          <div className="stat-content">
            <h3>ACTIVE USERS</h3>
            <p className="stat-number">
              {mockUsers.filter(u => u.status === 'Active').length.toLocaleString()}
            </p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <img src="/loans.svg" alt="loans icon" />
          </div>
          <div className="stat-content">
            <h3>USERS WITH LOANS</h3>
            <p className="stat-number">
              {Math.floor(mockUsers.length * 0.3).toLocaleString()}
            </p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <img src="/savings.svg" alt="savings icons" />
          </div>
          <div className="stat-content">
            <h3>USERS WITH SAVINGS</h3>
            <p className="stat-number">
              {Math.floor(mockUsers.length * 0.8).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="users-table-container">
        {/* Optional: Add top-level filters */}
        {/* <div className="table-filters">
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
          
          <select 
            value={filterOrg} 
            onChange={(e) => setFilterOrg(e.target.value)}
          >
            <option value="">All Organizations</option>
            <option value="Lendsqr">Lendsqr</option>
            <option value="Irorun">Irorun</option>
            <option value="Lendstar">Lendstar</option>
          </select>
        </div> */}

        <UsersTable users={displayedUsers} onUserClick={handleUserClick} />

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

export default Dashboard;