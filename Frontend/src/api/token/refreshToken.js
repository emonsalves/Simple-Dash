import axios from "axios";
import { backendUrl } from "../../config";

const refreshToken = async ({ user_name }) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${backendUrl}/token/refresh`,
      data: {
        user_name,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { refreshToken };
