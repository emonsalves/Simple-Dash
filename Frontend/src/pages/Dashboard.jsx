import { searchUsers } from "../api/user";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logOut } = useAuthContext();
  const goTo = useNavigate();


  const handleLogout = async (e) => {
    e.preventDefault();
    logOut();
    goTo("/auth");
  };

  const onClick = async (e) => {
    e.preventDefault();
    try {
      const response = await searchUsers({
        userName: user.user_name,
        token: user.accessToken,
      });
      return console.log(response.body.message || response.body);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      {user && (
        <form className="form">
          <h1>Dashboard</h1>
          <h2>Welcome {user.user_name}</h2>
          <h2>Role: {user.Role.name}</h2>
          <button onClick={onClick}>Search User</button>
          <button onClick={handleLogout}>Logout</button>
        </form>
      )}
    </>
  );
}

export { Dashboard };
