import axios from "axios";
import { backendUrl } from "../../config";

const refreshToken = async ({ userName }) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${backendUrl}/token/refresh`,
      data: {
        userName,
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
