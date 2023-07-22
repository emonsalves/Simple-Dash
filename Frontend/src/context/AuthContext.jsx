import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(false);
  const [tokens, setTokens] = useState(false);


  useEffect(() => {
    (function () {
      const newTokens = JSON.parse(localStorage.getItem("tokens"));
      const newUser = JSON.parse(localStorage.getItem("user"));

      if (newTokens && newUser) {
        setTokens(newTokens);
        setUser(newUser);
        setIsAuthenticated(true);
      }
    })();
  }, []);

  useEffect(() => {
    (function () {
      if (tokens && user) {
        localStorage.setItem("tokens", JSON.stringify(tokens));
        localStorage.setItem("user", JSON.stringify(user));
      }
    })();
  }, [tokens, user]);

  const logOut = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(false);
    setTokens(false);
  };

  const Login = async ({ body }) => {
    const { accessToken, refreshToken, user } = body;

    localStorage.setItem(
      "tokens",
      JSON.stringify({ accessToken, refreshToken })
    );
    localStorage.setItem("user", JSON.stringify(user));
    setIsAuthenticated(true);
    setTokens({ accessToken, refreshToken });
    setUser(user);
  };

  const value = {
    isAuthenticated,
    user,
    logOut,
    Login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
