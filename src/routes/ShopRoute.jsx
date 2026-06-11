import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import useAuth from "../hooks/useAuth";

export default function ShopRoute({ children }) {
  const { isShop, isAdmin } = useAuth();
  return <ProtectedRoute>{isShop || isAdmin ? children : <Navigate to="/login" replace />}</ProtectedRoute>;
}
