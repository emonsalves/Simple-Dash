import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [tokens, setTokens] = useState("");

  useEffect(() => {
    const tokensJson = localStorage.getItem("tokens");
    if (tokensJson) {
      const tokens = JSON.parse(tokensJson);
      const { accessToken, refreshToken } = tokens;
      setTokens({ accessToken, refreshToken });
      setIsAuthenticated(true);
      setUser(tokens);
    }
  }, []);

  const logOut = () => {
    try {
      console.log("User logged out successfully");
      setIsAuthenticated(false);
      setUser(null);
      setTokens(null);
      localStorage.removeItem("tokens");
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
