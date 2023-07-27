import axios from "axios";
import { backendUrl } from "../../config";
import { objectResponse } from "../../lib/objectResponse.js";

const login = async ({ userName, password }) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${backendUrl}/user/login`,
      data: {
        userName,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const { statusCode, body } = response.data;
      const { accessToken, refreshToken, user } = body;
      const userFormatted = objectResponse(user);
      const newBody = { accessToken, refreshToken, user: userFormatted };
      return { statusCode, body: newBody };
    }

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { login };
