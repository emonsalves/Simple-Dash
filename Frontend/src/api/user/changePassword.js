import axios from "axios";
import { backendUrl } from "../../config";

const changePassword = async ({
  userName,
  oldPassword,
  newPassword,
  confirmNewPassword,
}) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${backendUrl}/user/change-password/${userName}`,
      data: {
        oldPassword,
        newPassword,
        confirmNewPassword,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { changePassword };
