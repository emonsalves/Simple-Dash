import { useState } from "react";
import { recoveryAccount } from "../api/user";
import { Button } from "../components/Button/ButtonMagic";

function ForgotPassword() {
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await recoveryAccount({ userName });
      if (response.statusCode === 200) {
        alert("Email Sent");
        console.log(`${response.body.message} to User : ${userName}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="forgot-password-container flex flex-col items-center w-[300px]">
      <form className="form flex flex-col  p-2" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <div className="form-control mb-4">
          <label htmlFor="username" className="font-medium">
            UserName
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
            value={userName}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
          />
        </div>
        <Button
          text="Send Email"
          type="submit"
          tailwind="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
}

export { ForgotPassword };
