import { createContext, useContext, useEffect, useState } from "react";
import { objectResponse } from "../lib/objectResponse";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(false);
  const [tokens, setTokens] = useState(false);

  useEffect(() => {
    const newTokens = JSON.parse(localStorage.getItem("tokens"));
    const newUser = JSON.parse(localStorage.getItem("user"));

    if (newTokens && newUser) {
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

  const createToken = async ({ body }) => {
    const { accessToken, refreshToken, user } = body;
    const userFormatted = objectResponse(user);
    localStorage.setItem(
      "tokens",
      JSON.stringify({ accessToken, refreshToken })
    );
    localStorage.setItem("user", JSON.stringify(userFormatted));
    setIsAuthenticated(true);
    setTokens({ accessToken, refreshToken });
    setUser(userFormatted);
  };

  const updateToken = ({ accessToken, refreshToken }) => {
    setTokens({ accessToken, refreshToken });
    localStorage.setItem(
      "tokens",
      JSON.stringify({ accessToken, refreshToken })
    );
  };

  const value = {
    isAuthenticated,
    user,
    logOut,
    createToken,
    updateToken,
    tokens,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
