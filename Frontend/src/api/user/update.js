import axios from "axios";
import { backendUrl } from "../../config";

const updateUserInfo = async ({
  user_name,
  first_name,
  last_name,
  email,
  address,
  phone,
}) => {
  try {

    console.log("USER", user_name)
    const response = await axios({
      method: "PUT",
      url: `${backendUrl}/user/update/${user_name}`,
      data: {
        first_name,
        last_name,
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
