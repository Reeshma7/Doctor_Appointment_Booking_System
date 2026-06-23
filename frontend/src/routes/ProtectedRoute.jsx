import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, roleRequired }) {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== roleRequired) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;