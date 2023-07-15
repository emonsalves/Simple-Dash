import axios from "axios";
import { backendUrl } from "../../config";

const searchUsers = async ({ userName, token }) => {
  try {
    console.log("test Search", token);
    console.log("test Search", userName);

    const response = await axios.get(
      `${backendUrl}/user/all`,
      { userName, token },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export { searchUsers };
