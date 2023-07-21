import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(false);
  const [tokens, setTokens] = useState(false);

  useEffect(() => {
    const newTokens = JSON.parse(localStorage.getItem("tokens"));
    const newUser = JSON.parse(localStorage.getItem("user"));

    if (newTokens && newUser) {
      console.log("test",newUser)
      setTokens(newTokens);
      setUser(newUser);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (tokens && user) {
      localStorage.setItem("tokens", JSON.stringify(tokens));
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [tokens, user]);

  const logOut = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(false);
    setTokens(false);
  };

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    logOut,
    setTokens,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
