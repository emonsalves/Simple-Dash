import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { searchUsers } from "../api/user";

function Dashboard() {
  const { setIsAuthenticated, user, setUser } = useAuthContext();
  const goTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("User logged out successfully");
      setIsAuthenticated(false);
      setUser({});
      goTo("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = async (e) => {
    e.preventDefault();
    try {
      console.log("test", user);
      const response = await searchUsers({
        userName: user.user.user_name,
        token: user.accessToken,
      });
      console.log(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Dashboard</h1>
        <h2>Welcome {user.user.user_name}</h2>
        <h3>Role: {user.user.Role.name}</h3>
        <button onClick={onClick}>Search User</button>
        <button type="submit">Log out</button>
      </form>
    </>
  );
}

export { Dashboard };
