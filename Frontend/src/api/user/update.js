import axios from "axios";
import { backendUrl } from "../../config";

const updateUserInfo = async ({ userName, firstName, lastName, email }) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${backendUrl}/user/update`,
      data: {
        userName,
        firstName,
        lastName,
        email,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { updateUserInfo };
