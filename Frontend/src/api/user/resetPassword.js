import axios from "axios";
import { backendUrl } from "../../config";

const resetPassword = async ({
  userName,
  resetCode,
  newPassword,
  confirmNewPassword,
}) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${backendUrl}/user/reset-password/${userName}`,
      data: {
        resetCode,
        newPassword,
        confirmNewPassword,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { updatePassword };
