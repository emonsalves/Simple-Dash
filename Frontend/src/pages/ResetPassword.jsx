import { useState } from "react";

function ResetPassword() {
  const [state, setState] = useState({ password: "" });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate>
            <h1 className="h3 mb-3 font-weight-normal">Reset Password</h1>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter New Password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Confirm New Password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export { ResetPassword };
