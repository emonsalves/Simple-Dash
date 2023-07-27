import axios from "axios";
import { backendUrl } from "../../config";

const updatePassword = async ({
  userName,
  resetCode,
  password,
  passwordConfirmation,
}) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${backendUrl}/user/reset-password/${userName}`,
      data: {
        resetCode,
        password,
        passwordConfirmation,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { updatePassword };
