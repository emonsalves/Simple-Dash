import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/user";
import { Button } from "../components/Button/ButtonMagic";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const goTo = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createUser({
        userName,
        password,
        passwordConfirmation,
      });

      const { status } = response;
      const { message } = response.data.body;

      if (status === 201) {
        setErrorResponse("");
        goTo("/auth");
        console.log(message);
      } else {
        console.log(message);
        setErrorResponse(message);
        setTimeout(() => setErrorResponse(""), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form md:w-2/3 lg:w-1/2 xl:w-1/3 p-2 mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">Registration</h1>
      {!!errorResponse && <div className="errorMessage text-red-500 mb-4">{errorResponse}</div>}
      <div className="form-control mb-4">
        <label htmlFor="username" className="font-medium">
          User
        </label>
        <input
          type="text"
          id="username"
          name="username"
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
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
        />
      </div>
      <div className="flex justify-center">
        <Button
          text="Register"
          type="submit"
          tailwind="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </div>
    </form>
  );
}

export { Register };