import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/user.context";

export const ProtectedRoutes = () => {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/" />;
};
