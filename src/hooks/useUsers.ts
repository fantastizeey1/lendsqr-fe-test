// src/hooks/useUsers.ts
import { useEffect, useState } from "react";
import { fetchUsers } from "../services/userService";
import type { User } from "../types";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshUsers = async () => {
    try {
      const freshUsers = await fetchUsers();
      setUsers(freshUsers);
      localStorage.setItem("users", JSON.stringify(freshUsers));
      setError(null);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to load users");
    }
  };

  useEffect(() => {
    const cachedUsers = localStorage.getItem("users");

    if (cachedUsers) {
      setUsers(JSON.parse(cachedUsers));
      setLoading(false);
      // Optionally refresh in background
      refreshUsers();
    } else {
      refreshUsers().finally(() => setLoading(false));
    }
  }, []);

  return { users, loading, error, refreshUsers };
};
