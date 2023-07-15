import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import DefaultLayout from "../layout/DefaultLayout";
import { login } from "../api/auth";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const { isAuthenticated, setIsAuthenticated, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleResponse = (response) => {
    const { status } = response;
    const { body } = response.data;

    if (status === 200) {
      console.log(body);
      console.log("User logged in successfully");
      setErrorResponse("");
      setIsAuthenticated(!isAuthenticated);
      setUser(body);
      navigate("/dashboard");
    } else {
      console.log(body.message);
      setErrorResponse(body.message);
      setTimeout(() => setErrorResponse(""), 5000);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login({ userName, password });
      handleResponse(response);
    } catch (error) {
      console.log(error);
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
          <label htmlFor="username">User</label>
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

export { Login };
