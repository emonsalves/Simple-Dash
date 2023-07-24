import { useState } from "react";
import { Button } from "../components/Button/ButtonMagic";

function ResetPassword() {
  const [userName, setUserName] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="form md:w-2/3 lg:w-1/2 xl:w-1/3 p-2 mx-auto drop-shadow-2xl rounded-lg border-r border-gray-600 bg-slate-800 text-gray-50">
      <form className="form flex flex-col p-2" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <div className="form-control mb-4 flex flex-col">
          <label htmlFor="userName" className="font-medium">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="form-control mb-4 flex flex-col">
          <label htmlFor="resetCode" className="font-medium">
            Reset Code
          </label>
          <input
            type="text"
            id="resetCode"
            name="resetCode"
            value={resetCode}
            onChange={(e) => setResetCode(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="form-control mb-4 flex flex-col">
          <label htmlFor="password" className="font-medium">
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="form-control mb-4 flex flex-col">
          <label htmlFor="passwordConfirmation" className="font-medium">
            Confirm New Password
          </label>
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <Button
          text="Reset Password"
          type="submit"
          tailwind="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
}

export { ResetPassword };
