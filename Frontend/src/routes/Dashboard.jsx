import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../auth/AuthProvider";

function Dashboard() {
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();
  const goTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(" User logged out successfully");
      setIsAuthenticated(!isAuthenticated);
      goTo("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Dashboard</h1>
        <button type="submit">Log out</button>
      </form>
    </>
  );
}
export default Dashboard;
