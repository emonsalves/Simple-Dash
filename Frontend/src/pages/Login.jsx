import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { login } from "../api/auth";
import { Button } from "../components/Button/ButtonMagic";
import useSweetAlert from "../hooks/useSweetAlert";
import useSweetToast from "../hooks/useSweetToast";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { Login } = useAuthContext();
  const goTo = useNavigate();
  const sweetAlert = useSweetAlert();
  const sweetToast = useSweetToast();

  if (localStorage.getItem("user")) {
    return <Navigate to="/in/dashboard" />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login({ userName, password });
      handleResponse(response);
    } catch (error) {
      sweetAlert.showAlert({
        title: "Error",
        text: error.message,
        icon: "error",
        timer: 2000,
      });
    }
  };

  const handleResponse = (response) => {
    const { statusCode, body } = response;
    if (statusCode === 200) {
      Login({ body });
      goTo("/in/dashboard");
      sweetToast.showToast();
    } else {
      sweetAlert.showAlert({
        title: "Error",
        text: body.message,
        icon: "error",
        timer: 2000,
      });
    }
  };

  return (
    <form
      className="form md:w-2/3 lg:w-1/2 xl:w-1/3 p-2 mx-auto drop-shadow-2xl rounded-lg bg-white dark:bg-slate-800 mt-16 mb-16 text-gray-50"
      onSubmit={handleSubmit}
    >
      <div className="form-header">
        <h1 className="text-2xl font-bold mb-4">Log in</h1>
      </div>
      <div className="form-body flex flex-col mb-4">
        <label htmlFor="username" className="mb-1 font-medium">
          UserName
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
