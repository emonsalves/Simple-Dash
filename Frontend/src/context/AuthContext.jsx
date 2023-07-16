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
      saveTokens(tokens);
    }
  }, []);

  const saveTokens = (newTokens) => {
    const { accessToken, refreshToken } = newTokens;
    setTokens({ accessToken, refreshToken });
    setIsAuthenticated(true);
    setUser(newTokens);
    localStorage.setItem("tokens", JSON.stringify(newTokens));
  };

  const removeTokens = () => {
    setIsAuthenticated(false);
    setUser({});
    setTokens("");
    localStorage.removeItem("tokens");
  };

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    removeTokens,
    saveTokens,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
