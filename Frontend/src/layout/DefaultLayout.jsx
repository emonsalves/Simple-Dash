import { Link } from "react-router-dom";

function DefaultLayout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
export default DefaultLayout;
