import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const userLocalStorage = localStorage.getItem("user");
  return userLocalStorage ? children : <Navigate to="/auth" />;
};

export { RequireAuth };