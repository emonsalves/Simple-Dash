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

  return (
    <div className="form md:w-2/3 lg:w-1/2 xl:w-1/3 p-2 mx-auto drop-shadow-2xl rounded-lg  bg-slate-800 mt-16 mb-16 text-gray-50">
      <form className="form flex flex-col  p-2 text-center">
        <h1 className="text-2xl font-bold mb-4"> Your Account Recovery</h1>
        <p className="mb-4 text-sm">
          Enter your username and we will send you a link to reset your password
          to your email.
        </p>
        <div className="form-control mb-4">
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
