import { generateMockUsers } from "./mockUsers";
import type { User } from "../types";

export function getStoredUsers(): User[] {
  const cached = localStorage.getItem("users");
  if (cached) return JSON.parse(cached);
  const users = generateMockUsers();
  localStorage.setItem("users", JSON.stringify(users));
  return users;
}
