import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/auth">Go to Login</Link>
    </div>
  );
}
export { Home };
