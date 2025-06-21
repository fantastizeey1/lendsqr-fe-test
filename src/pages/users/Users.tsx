import { useState } from "react";
import UsersTable from "../../components/table/Table";
import { useNavigate } from "react-router-dom";
import type { FilterState, User } from "../../types";
import StatCard from "../../components/statCard/StatCard";
import "./_users.scss";
import { useUsers } from "../../hooks/useUsers";
import UserNotFound from "../../components/userNotFound/UserNotFound";
import Loading from "../../components/loading/Loading";

const Users: React.FC = () => {
  const { users, loading, error } = useUsers();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filters, setFilters] = useState<FilterState>({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  const navigate = useNavigate();

  if (loading && users.length === 0) return <Loading />;

  if (error) return <div className="error">Error loading users: {error}</div>;
  if (!users || users.length === 0) return <UserNotFound />;

  const filteredUsers = users.filter((user: User) => {
    return (
      (!filters.organization ||
        user.orgName
          .toLowerCase()
          .includes(filters.organization.toLowerCase())) &&
      (!filters.username ||
        user.userName.toLowerCase().includes(filters.username.toLowerCase())) &&
      (!filters.email ||
        user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (!filters.phoneNumber ||
        user.phoneNumber.includes(filters.phoneNumber)) &&
      (!filters.date ||
        new Date(user.dateJoined).toISOString().startsWith(filters.date)) &&
      (!filters.status ||
        user.status.toLowerCase() === filters.status.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleUserClick = (user: User) => {
    navigate(`/users/${user.id}`);
  };

  const resetFilters = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
    setCurrentPage(1);
  };

  // Get unique organizations for filter dropdown
  const allOrganizations = Array.from(
    new Set(users.map((user) => user.orgName))
  );

  return (
    <div className="users-container">
      <div className="users-page">
        <h1>Users</h1>

        <div className="users-stats">
          <StatCard
            title="USERS"
            icon="/users.svg"
            value={users.length.toLocaleString()}
          />
          <StatCard
            title="ACTIVE USERS"
            icon="/active.svg"
            value={users
              .filter((u) => u.status === "Active")
              .length.toLocaleString()}
          />
          <StatCard
            title="USERS WITH LOANS"
            icon="/loans.svg"
            value={Math.floor(users.length * 0.3).toLocaleString()}
          />
          <StatCard
            title="USERS WITH SAVINGS"
            icon="/savings.svg"
            value={Math.floor(users.length * 0.8).toLocaleString()}
          />
        </div>

        <div className="users-table-container">
          <UsersTable
            users={displayedUsers}
            onUserClick={handleUserClick}
            filters={filters}
            setFilters={setFilters}
            resetFilters={resetFilters}
            allOrganizations={allOrganizations}
          />

          <div className="pagination">
            <div className="pagination-info">
              Showing {Math.min(startIndex + 1, filteredUsers.length)} to{" "}
              {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of{" "}
              {filteredUsers.length} entries
            </div>
            <div className="pagination-controls">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages || 1}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                aria-label="Next page"
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
