// src/App.tsx
import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import "./styles/Global.scss";
import { appRoutes } from "./pages/routes";
import { fetchUsers } from "./services/userService";
import Loading from "./components/loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        if (!localStorage.getItem("users")) {
          const users = await fetchUsers();
          localStorage.setItem("users", JSON.stringify(users));
        }
      } catch (error) {
        console.error("Error loading users:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const element = useRoutes(appRoutes);
  if (loading) return <Loading />;

  return element;
}

export default App;
