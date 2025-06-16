import { useState } from "react";

// Sample user data
const mockUsers = [
  { id: 1, orgName: "Lendsqr", userName: "john_doe", email: "john@example.com", phoneNumber: "+1234567890", dateJoined: "2023-01-15", status: "Active" },
  { id: 2, orgName: "Irorun", userName: "jane_smith", email: "jane@example.com", phoneNumber: "+1234567891", dateJoined: "2023-02-20", status: "Inactive" },
  { id: 3, orgName: "Lendstar", userName: "bob_wilson", email: "bob@example.com", phoneNumber: "+1234567892", dateJoined: "2023-03-10", status: "Pending" },
  { id: 4, orgName: "Lendsqr", userName: "alice_brown", email: "alice@example.com", phoneNumber: "+1234567893", dateJoined: "2023-04-05", status: "Active" },
  { id: 5, orgName: "Irorun", userName: "charlie_davis", email: "charlie@example.com", phoneNumber: "+1234567894", dateJoined: "2023-05-12", status: "Blacklisted" },
  { id: 6, orgName: "Lendstar", userName: "diana_miller", email: "diana@example.com", phoneNumber: "+1234567895", dateJoined: "2023-06-18", status: "Active" },
  { id: 7, orgName: "Lendsqr", userName: "edward_garcia", email: "edward@example.com", phoneNumber: "+1234567896", dateJoined: "2023-07-22", status: "Inactive" },
  { id: 8, orgName: "Irorun", userName: "fiona_martinez", email: "fiona@example.com", phoneNumber: "+1234567897", dateJoined: "2023-08-30", status: "Active" },
  { id: 9, orgName: "Lendstar", userName: "george_lopez", email: "george@example.com", phoneNumber: "+1234567898", dateJoined: "2023-09-14", status: "Pending" },
  { id: 10, orgName: "Lendsqr", userName: "helen_gonzalez", email: "helen@example.com", phoneNumber: "+1234567899", dateJoined: "2023-10-08", status: "Active" },
  { id: 11, orgName: "Irorun", userName: "ivan_rodriguez", email: "ivan@example.com", phoneNumber: "+1234567800", dateJoined: "2023-11-16", status: "Active" },
  { id: 12, orgName: "Lendstar", userName: "judy_hernandez", email: "judy@example.com", phoneNumber: "+1234567801", dateJoined: "2023-12-03", status: "Inactive" },
];

const Users: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [filterOrg, setFilterOrg] = useState<string>('');

  const filteredUsers = mockUsers.filter(user => {
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

  const handleUserClick = (user: any) => {
    console.log('User clicked:', user);
    // Add your user click logic here
  };

  return (
    <div className="users-container">
      

      <div className="users-page">
        <h1>Users</h1>
        
        <div className="users-stats">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>USERS</h3>
              <p className="stat-number">{mockUsers.length.toLocaleString()}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👤</div>
            <div className="stat-content">
              <h3>ACTIVE USERS</h3>
              <p className="stat-number">{mockUsers.filter(u => u.status === 'Active').length.toLocaleString()}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💳</div>
            <div className="stat-content">
              <h3>USERS WITH LOANS</h3>
              <p className="stat-number">{Math.floor(mockUsers.length * 0.3).toLocaleString()}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <h3>USERS WITH SAVINGS</h3>
              <p className="stat-number">{Math.floor(mockUsers.length * 0.8).toLocaleString()}</p>
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
                  <tr key={user.id} onClick={() => handleUserClick(user)} className="user-row">
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
    </div>
  );
};

export default Users;