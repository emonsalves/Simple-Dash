import axios from "axios";
import { backendUrl } from "../../config";

const searchUsers = async ({  token }) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${backendUrl}/user/all`,
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { searchUsers };
