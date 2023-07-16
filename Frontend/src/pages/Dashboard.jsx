import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { searchUsers } from "../api/user";

function Dashboard() {
  const { user, removeTokens } = useAuthContext();
  const goTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    removeTokens();
    goTo("/");
  };

  const onClick = async (e) => {
    e.preventDefault();
    try {
      const response = await searchUsers({
        userName: user.user.user_name,
        token: user.accessToken,
      });
     return console.log(response.body.message || response.body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="form">
        <h1>Dashboard</h1>
        <h2>Welcome {user.user.user_name}</h2>
        <h3>Role: {user.user.Role.name}</h3>
        <button onClick={onClick}>Search User</button>
        <button onClick={handleLogout}>Logout</button>
      </form>
    </>
  );
}

export { Dashboard };
