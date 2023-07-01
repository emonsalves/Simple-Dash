import DefaultLayout from "../layout/DefaultLayout";

function Login() {
  return (
    <DefaultLayout>
      <form className="form">
        <h3>Log in</h3>
        <div>
          <label htmlFor="email">Username</label>
          <input type="text" id="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Log in</button>
      </form>
    </DefaultLayout>
  );
}
export default Login;
