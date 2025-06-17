import { useState } from "react";
import UsersTable from "../../components/table/Table";
import { mockUsers } from "../../data";
import StatCard from "../../components/statCard/StatCard";
import type { User } from "../../types";
import { useNavigate } from "react-router-dom";
import { generateMockUsers } from "../../utils/mockUsers";



const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState('');
  const [filterOrg, setFilterOrg] = useState('');
  const navigate = useNavigate();
  const allUsers = generateMockUsers();

  const totalUsers = allUsers.length;
  const activeUsers = allUsers.filter(u => u.status === 'Active').length;
  const usersWithLoans = Math.floor(totalUsers * 0.3);
  const usersWithSavings = Math.floor(totalUsers * 0.8);

  // Apply filters
  const filteredUsers: User[] = allUsers.filter(user => {
    return (!filterStatus || user.status === filterStatus) &&
           (!filterOrg || user.orgName === filterOrg);
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  // Click handler
  const handleUserClick = (user: User): void => {
    console.log("User clicked:", user);
    // Navigate or open modal, etc.
  };

  return (
    <div className="dashboard-page">
      <h1>Users</h1>

      {/* Stats Section */}
      <div className="dashboard-stats">
        <StatCard title="USERS" icon="/users.svg" value={totalUsers.toLocaleString()} />
        <StatCard title="ACTIVE USERS" icon="/active.svg" value={activeUsers.toLocaleString()} />
        <StatCard title="USERS WITH LOANS" icon="/loans.svg" value={usersWithLoans.toLocaleString()} />
        <StatCard title="USERS WITH SAVINGS" icon="/savings.svg" value={usersWithSavings.toLocaleString()} />
      </div>

      {/* Users Table */}
      <div className="users-table-container">
        <UsersTable users={displayedUsers} onUserClick={handleUserClick} />

        {/* Pagination */}
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
