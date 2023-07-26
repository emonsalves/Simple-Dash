import axios from "axios";
import { backendUrl } from "../../config";

const updatePassword = async ({
  user_name,
  resetCode,
  password,
  passwordConfirmation,
}) => {
  //  console.log("changePassword.js: ", user_name, resetCode, password, passwordConfirmation);

  try {
    const response = await axios({
      method: "PUT",
      url: `${backendUrl}/user/reset-password/${user_name}`,
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
