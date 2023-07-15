import axios from "axios";
import { backendUrl } from "../../config";

const createUser = async ({ userName, password, passwordConfirmation }) => {
  try {
    const response = await axios.post(
      `${backendUrl}/user/register`,
      { userName, password, passwordConfirmation },
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

export { createUser };
