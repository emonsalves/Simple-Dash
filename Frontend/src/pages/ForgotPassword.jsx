import { useState } from "react";
import { recoveryAccount } from "../api/user";

function ForgotPassword() {
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await recoveryAccount({ userName });
      if (response.statusCode === 200) {
        alert("Email Sent");
        console.log(`${response.body.message} to User : ${userName}`);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
      <form className="form">
        <h1>Forgot Password</h1>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Send Email
        </button>
      </form>
  );
}

export { ForgotPassword };
