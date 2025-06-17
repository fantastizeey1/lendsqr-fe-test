import { useMemo, useState } from "react";
import UsersTable from "../../components/table/Table";
import { useNavigate } from "react-router-dom";
import type { User } from "../../types";
import { generateMockUsers } from "../../utils/mockUsers";
import StatCard from "../../components/statCard/StatCard";
import "./_users.scss";
import { getStoredUsers } from "../../utils/userStorage";



const Users: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [filterOrg, setFilterOrg] = useState<string>('');
  const navigate = useNavigate();
  const allUsers = getStoredUsers();

  const filteredUsers = allUsers.filter(user => {
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

  const handleUserClick = (user: User) => {
    navigate(`/users/${user.id}`); // ✅ Navigate to user details page
  };
  

  return (
    <div className="users-container">
      

      <div className="users-page">
        <h1>Users</h1>
        
        <div className="users-stats">
          <StatCard
            title="USERS"
            icon="/users.svg"
            value={allUsers.length.toLocaleString()}
          />
          <StatCard
            title="ACTIVE USERS"
            icon="/active.svg"
            value={allUsers.filter(u => u.status === 'Active').length.toLocaleString()}
          />
          <StatCard
            title="USERS WITH LOANS"
            icon="/loans.svg"
            value={Math.floor(allUsers.length * 0.3).toLocaleString()}
          />
          <StatCard
            title="USERS WITH SAVINGS"
            icon="/savings.svg"
            value={Math.floor(allUsers.length * 0.8).toLocaleString()}
          />
        </div>

        <div className="users-table-container">
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
    </div>
  );
};

export default Users;