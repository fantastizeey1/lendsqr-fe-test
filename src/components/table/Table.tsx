import React, { useRef, useEffect, useState } from "react";
import "./_table.scss";
import type { User } from "../../types";

interface FilterState {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

type UsersTableProps = {
  users: User[];
  onUserClick: (user: User) => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  allOrganizations: string[];
};

const UsersTable: React.FC<UsersTableProps> = ({
  users,
  onUserClick,
  filters,
  setFilters,
  resetFilters,
  allOrganizations,
}) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const filterRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setActiveFilter(null);
      }
      if (
        actionRef.current &&
        !actionRef.current.contains(event.target as Node)
      ) {
        setActiveAction(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterClick = (filterType: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveFilter(activeFilter === filterType ? null : filterType);
    setActiveAction(null);
  };

  const handleActionClick = (userId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveAction(activeAction === userId ? null : userId);
    setActiveFilter(null);
  };

  const handleFilterChange = (field: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const getStatusClass = (status: string) => {
    return `status-${status.toLowerCase()}`;
  };

  const FilterPopover = () => (
    <div className="filter-popover" ref={filterRef}>
      <div className="filter-form">
        <div className="filter-field">
          <label>Organization</label>
          <select
            value={filters.organization}
            onChange={(e) => handleFilterChange("organization", e.target.value)}
          >
            <option value="">Select</option>
            {allOrganizations.map((org) => (
              <option key={org} value={org}>
                {org}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label>Username</label>
          <input
            type="text"
            placeholder="User"
            value={filters.username}
            onChange={(e) => handleFilterChange("username", e.target.value)}
          />
        </div>

        <div className="filter-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={filters.email}
            onChange={(e) => handleFilterChange("email", e.target.value)}
          />
        </div>

        <div className="filter-field">
          <label>Date</label>
          <input
            type="date"
            value={filters.date}
            onChange={(e) => handleFilterChange("date", e.target.value)}
          />
        </div>

        <div className="filter-field">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            value={filters.phoneNumber}
            onChange={(e) => handleFilterChange("phoneNumber", e.target.value)}
          />
        </div>

        <div className="filter-field">
          <label>Status</label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange("status", e.target.value)}
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
        </div>

        <div className="filter-actions">
          <button className="reset-btn" onClick={resetFilters}>
            Reset
          </button>
          <button className="filter-btn" onClick={() => setActiveFilter(null)}>
            Filter
          </button>
        </div>
      </div>
    </div>
  );

  const ActionPopover = ({ userId }: { userId: string }) => (
    <div className="action-popover" ref={actionRef}>
      <div
        className="action-item"
        onClick={() => onUserClick(users.find((u) => u.id === userId)!)}
      >
        <span className="action-icon">👁</span>
        View Details
      </div>
      <div
        className="action-item"
        onClick={() => console.log("Blacklist user:", userId)}
      >
        <span className="action-icon">🚫</span>
        Blacklist User
      </div>
      <div
        className="action-item"
        onClick={() => console.log("Activate user:", userId)}
      >
        <span className="action-icon">✅</span>
        Activate User
      </div>
    </div>
  );

  return (
    <div className="users-table">
      <table>
        <thead>
          <tr>
            <th>
              ORGANIZATION
              <button
                className="filter-button"
                onClick={(e) => handleFilterClick("organization", e)}
              >
                <img src="/filter-button.svg" alt="filter" />
              </button>
              {activeFilter === "organization" && <FilterPopover />}
            </th>
            <th>
              USERNAME
              <button
                className="filter-button"
                onClick={(e) => handleFilterClick("username", e)}
              >
                <img src="/filter-button.svg" alt="filter" />
              </button>
              {activeFilter === "username" && <FilterPopover />}
            </th>
            <th>
              EMAIL
              <button
                className="filter-button"
                onClick={(e) => handleFilterClick("email", e)}
              >
                <img src="/filter-button.svg" alt="filter" />
              </button>
              {activeFilter === "email" && <FilterPopover />}
            </th>
            <th>
              PHONE NUMBER
              <button
                className="filter-button"
                onClick={(e) => handleFilterClick("phone", e)}
              >
                <img src="/filter-button.svg" alt="filter" />
              </button>
              {activeFilter === "phone" && <FilterPopover />}
            </th>
            <th>
              DATE JOINED
              <button
                className="filter-button"
                onClick={(e) => handleFilterClick("date", e)}
              >
                <img src="/filter-button.svg" alt="filter" />
              </button>
              {activeFilter === "date" && <FilterPopover />}
            </th>
            <th>
              STATUS
              <button
                className="filter-button"
                onClick={(e) => handleFilterClick("status", e)}
              >
                <img src="/filter-button.svg" alt="filter" />
              </button>
              {activeFilter === "status" && <FilterPopover />}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => onUserClick(user)}
              className="user-row"
            >
              <td>{user.orgName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                {new Date(user.dateJoined).toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </td>
              <td>
                <span className={`status ${getStatusClass(user.status)}`}>
                  {user.status}
                </span>
              </td>
              <td style={{ position: "relative" }}>
                <button
                  className="action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleActionClick(user.id, e);
                  }}
                >
                  ⋮
                </button>
                {activeAction === user.id && <ActionPopover userId={user.id} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
