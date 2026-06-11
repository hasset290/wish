import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import useAuth from "../hooks/useAuth";

export default function CoupleRoute({ children }) {
  const { isCouple, isAdmin } = useAuth();
  return <ProtectedRoute>{isCouple || isAdmin ? children : <Navigate to="/login" replace />}</ProtectedRoute>;
}
