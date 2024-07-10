import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/user.context";

export const ProtectedRoutes = () => {
  const { user, isUserChecked } = useUser();

  return isUserChecked ? user ? <Outlet /> : <Navigate to="/" /> : null;
};
