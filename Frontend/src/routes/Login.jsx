import { useState } from "react";
import { useAuthContext } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();

  const goTo = useNavigate();

  const handleResponse = (response) => {
    if (response.status === 200) {
      console.log("User logged in successfully");
      setErrorResponse("");
      setIsAuthenticated(!isAuthenticated);
      goTo("/dashboard");
    } else {
      console.log("User login failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        { username: userName, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      handleResponse(response);
    } catch (error) {
      console.log(error.response.data.body.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <DefaultLayout>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Log in</h1>
          {!!errorResponse && (
            <div className="errorMessage">{errorResponse.body.message}</div>
          )}
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </DefaultLayout>
    </>
  );
}
export default Login;
