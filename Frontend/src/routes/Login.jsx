import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import AuthService from "../auth/AuthService";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const handleResponse = (response) => {
    if (response.status === 200) {
      console.log(response.data.body);
      console.log("User logged in successfully");
      setErrorResponse("");
      setIsAuthenticated(!isAuthenticated);
      navigate("/dashboard");
    } else {
      console.log("User login failed");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await AuthService.login({ userName, password });
      handleResponse(response);
    } catch (error) {
      console.log(error.message);
      setErrorResponse(error.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <DefaultLayout>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Log in</h1>
        {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </DefaultLayout>
  );
}

export default Login;
