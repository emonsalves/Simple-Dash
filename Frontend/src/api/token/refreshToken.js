import axios from "axios";
import { backendUrl } from "../../config";

const refreshToken = async (refresh_token) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${backendUrl}/token/refresh`,
      data: {
        refresh_token,
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
