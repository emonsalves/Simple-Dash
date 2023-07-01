import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
});

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
