import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/user";
import { Button } from "../components/Button/ButtonMagic";
import useSweetAlert from "../hooks/useSweetAlert";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const goTo = useNavigate();
  const sweetAlert = useSweetAlert();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createUser({
        userName,
        password,
        passwordConfirmation,
      });

      const { statusCode } = response;
      const { message, userName: userNameResponse } = response.body;

      if (statusCode === 201) {
        goTo("/auth");
        sweetAlert.showAlert({
          title: "Success",
          text: `User ${userNameResponse} created successfully`,
          icon: "success",
          timer: 2000,
        });
      } else {
        sweetAlert.showAlert({
          title: "Error",
          text: message,
          icon: "error",
          timer: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form md:w-2/3 lg:w-1/2 xl:w-1/3 p-2 mx-auto drop-shadow-2xl rounded-lg bg-slate-800 mt-16 mb-16 text-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-center">Register User</h1>
      <div className="form-control mb-4">
        <label htmlFor="username" className="font-medium">
          UserName
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
        />
      </div>
      <div className="form-control mb-4">
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
        />
      </div>
      <div className="form-control mb-4">
        <label htmlFor="passwordConfirmation" className="font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          id="passwordConfirmation"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
        />
      </div>
      <div className="flex justify-center">
        <Button
          text="Register"
          action={handleSubmit}
          tailwind="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        />
      </div>
    </form>
  );
}

export { Register };
