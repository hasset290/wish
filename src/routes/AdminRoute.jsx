import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import useAuth from "../hooks/useAuth";

export default function AdminRoute({ children }) {
  const { isAdmin } = useAuth();
  return <ProtectedRoute>{isAdmin ? children : <Navigate to="/login" replace />}</ProtectedRoute>;
}
