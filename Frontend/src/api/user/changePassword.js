import axios from "axios";
import { backendUrl } from "../../config";

const updatePassword = async ({ userName, password, password2 }) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${backendUrl}/user/resetPassword`,
      data: {
        userName,
        password,
        password2,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { updatePassword };
