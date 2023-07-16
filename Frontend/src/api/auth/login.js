import axios from "axios";
import { backendUrl } from "../../config";

const login = async ({ userName, password }) => {
  try {
    const response = await axios.post(
      `${backendUrl}/user/login`,
      { userName, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { login };
