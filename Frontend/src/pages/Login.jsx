import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { login } from "../api/auth";
import { Button } from "../components/Button/ButtonMagic";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const { Login } = useAuthContext();
  const goTo = useNavigate();

  if (localStorage.getItem("user")) {
    return <Navigate to="/in/dashboard" />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login({ userName, password });
      handleResponse(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleResponse = (response) => {
    const { statusCode, body } = response;
    if (statusCode === 200) {
      Login({ body });
      goTo("/in/dashboard");
    } else {
      setErrorResponse(body.message);
      setTimeout(() => setErrorResponse(""), 5000);
    }
  };

  return (
    <form
      className="form flex flex-col justify-between md:w-2/3 lg:w-1/2 xl:w-1/3 p-2 mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="form-header">
        <h1 className="text-2xl font-bold mb-4">Log in</h1>
        {!!errorResponse && (
          <div className="errorMessage text-red-500">{errorResponse}</div>
        )}
      </div>

      <div className="form-body flex flex-col mb-4">
        <label htmlFor="username" className="mb-1 font-medium">
          User
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
        />
        <label htmlFor="password" className="mt-4 mb-1 font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>
      <div className="form-footer flex justify-between gap-2">
        <Button
          text="Log in"
          type="submit"
          tailwind="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
        <Button
          text="Forgot Password"
          type="button"
          action={() => goTo("/auth/forgot-password")}
          tailwind="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        />
      </div>
    </form>
  );
}

export { Login };
