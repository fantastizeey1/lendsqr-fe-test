import LoginPage from "./Login";
import { useNavigate } from "react-router-dom";

export default function LoginRoute() {
  const navigate = useNavigate();
  return <LoginPage onLogin={() => navigate("/users")} />;
}
