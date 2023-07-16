import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import DefaultLayout from "../layout/DefaultLayout";
import { login } from "../api/auth";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const { saveTokens } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login({ userName, password });
      handleResponse(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResponse = (response) => {
    const { statusCode, body } = response;
    if (statusCode === 200) {
      saveTokens(body);
      navigate("/dashboard");
    } else {
      console.log("message: ", body.message);
      setErrorResponse(body.message);
      setTimeout(() => setErrorResponse(""), 5000);
    }
  };

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
