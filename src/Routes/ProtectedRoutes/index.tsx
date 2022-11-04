import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Preload from "../../components/Preload";
import { ContextLogin } from "../../context/LoginProvider";

function ProtectedRoutes() {
  const { user, loading } = useContext(ContextLogin);

  if (loading) return <Preload />;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
