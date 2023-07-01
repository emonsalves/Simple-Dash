import DefaultLayout from "../layout/DefaultLayout";
function Signup() {
  return (
    <>
      <DefaultLayout>
        <form className="form">
          <h1>Signup</h1>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-control">
            <label htmlFor="passwordConfirmation">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </DefaultLayout>
    </>
  );
}
export default Signup;
