import axios from "axios";
import { backendUrl } from "../../config";

const recoveryAccount = async ({ userName }) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${backendUrl}/user/recovery`,
      data: {
        userName,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Error to recovery : ", error.response.data.body.message);
    return error.response.data;
  }
};

export { recoveryAccount };
