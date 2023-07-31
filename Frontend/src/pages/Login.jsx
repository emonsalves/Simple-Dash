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
  const { createToken } = useAuthContext();
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
      createToken({ body });
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
      className="form md:w-2/3 lg:w-1/2 xl:w-1/3 p-2 mx-auto drop-shadow-2xl rounded-lg  bg-slate-800 mt-16 mb-16 text-gray-50"
      onSubmit={handleSubmit}
    >
      <div className="form-header font-bold m-2 text-center">
        <h1 className="text-2xl m-1 ">Wellcome</h1>
        <p>Sign in to your account</p>
      </div>
      <div className="form-body flex flex-col mb-4">
        <div className="relative flex justify-center m-2">
          <span className=" inline-flex  items-center px-3 border-t bg-white  border-gray-300 text-gray-500 shadow-sm text-sm rounded-l-md">
            <svg
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 12c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </span>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-r-md focus:outline-none focus:ring focus:ring-blue-400 placeholder-gray-400 placeholder:text-xl "
          />
        </div>

        <div className="relative flex justify-center m-2">
          <span className=" inline-flex  items-center px-3 border-t bg-white  border-gray-300 text-gray-500 shadow-sm text-sm rounded-l-md">
            <svg
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
            </svg>
          </span>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-r-md focus:outline-none focus:ring focus:ring-blue-400 placeholder-gray-400 placeholder:text-xl "
          />
        </div>
      </div>

      <div className="form-footer flex justify-between gap-2">
        <Button
          text="Log in"
          type="submit"
          tailwind="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 w-40 rounded"
        />
        <Button
          text="Forgot Password"
          type="button"
          action={() => goTo("/auth/forgot-password")}
          tailwind="bg-red-700 hover:bg-red-500 text-white font-bold py-2 w-40 rounded"
        />
      </div>
    </form>
  );
}

export { Login };
