import { useState } from "react";
import { useAuthContext } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { Navigate, useNavigate } from "react-router-dom";
import AuthService from "../auth/AuthService";

function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuthContext();

  const goTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.signIn({
        userName,
        password,
        passwordConfirmation,
      });
      if (response.status === 201) {
        setErrorResponse("");
        goTo("/");
      }
      console.log("test", response.data.body.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <DefaultLayout>
        <form className="form" onSubmit={handleSubmit}>
          <h1>SignIn</h1>
          {!!errorResponse && (
            <div className="errorMessage">{errorResponse.body.message}</div>
          )}
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="passwordConfirmation">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <button type="submit">SignIn</button>
        </form>
      </DefaultLayout>
    </>
  );
}
export default SignIn;
