// src/services/userService.ts
import axios from "axios";

const USERS_API_URL = "https://lendsqr-api.netlify.app/mockUsers.json";

export const fetchUsers = async () => {
  const response = await axios.get(USERS_API_URL);
  return response.data;
};
