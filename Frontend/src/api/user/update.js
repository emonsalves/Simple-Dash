import axios from "axios";
import { backendUrl } from "../../config";

const updateUserInfo = async ({
  userName,
  firstName,
  lastName,
  email,
  address,
  phone,
}) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${backendUrl}/user/update/${userName}`,
      data: {
        firstName,
        lastName,
        email,
        address,
        phone,
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

export { updateUserInfo };
