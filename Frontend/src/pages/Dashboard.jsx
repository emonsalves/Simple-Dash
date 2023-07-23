import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { searchUsers } from "../api/user";
import { Button } from "../components/Button/ButtonMagic";

function Dashboard() {
  const { user, tokens } = useAuthContext();
  const [searchResult, setSearchResult] = useState("");

  const onClick = async (e) => {
    e.preventDefault();
    try {
      const response = await searchUsers({
        userName: user.user_name,
        token: tokens.accessToken,
      });
      setSearchResult(response.body.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user && (
        <form className="form flex flex-col justify-between md:w-2/3 lg:w-1/2 xl:w-1/3 p-2 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <h2 className="mb-2">Welcome {user.user_name}</h2>
          <h2 className="mb-4">Role: {user.Role.name}</h2>
          <Button
            text="Search Users"
            action={onClick}
            tailwind="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
          />
          {Array.isArray(searchResult) &&
            searchResult.map((user) => (
              <h2 key={user.id} className="mb-4">
                {user.user_name}
              </h2>
            ))}
        </form>
      )}
    </>
  );
}

export { Dashboard };
