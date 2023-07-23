import { useState } from "react";
import { recoveryAccount } from "../api/user";
import { Button } from "../components/Button/ButtonMagic";
import useSweetAlert from "../hooks/useSweetAlert";

function ForgotPassword() {
  const [userName, setUserName] = useState("");
  const sweetAlert = useSweetAlert();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await recoveryAccount({ userName });
      if (response.statusCode === 200) {
        sweetAlert.showAlert({
          title: "Email Sent Successfully",
          text: response.body.message,
          icon: "success",
          timer: 2000,
        });
      } else {
        sweetAlert.showAlert({
          title: "Error",
          text: response.body.message,
          icon: "error",
          timer: 2000,
        });
      }
    } catch (error) {
      sweetAlert.showAlert({
        title: "Error",
        text: error.message,
        icon: "error",
        timer: 2000,
      });
    }
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="form md:w-2/3 lg:w-1/2 xl:w-1/3 p-2 mx-auto drop-shadow-2xl rounded-lg  dark:bg-slate-800 mt-16 mb-16 text-gray-50">
      <form className="form flex flex-col  p-2">
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
          action={handleSubmit}
          tailwind="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
}

export { ForgotPassword };
