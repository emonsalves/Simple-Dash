import { Link } from "react-router-dom";

function DefaultLayout({ children }) {
  return (
    <div className='flex flex-auto h-screen'> 
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
    </div>
  );
}
export default DefaultLayout;
