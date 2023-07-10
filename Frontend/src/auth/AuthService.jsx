import axios from "axios";

const login = async ({ userName, password }) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/login`,
      { userName, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.body.message);
  }
};

const signIn = async ({ userName, password, passwordConfirmation }) => {
  try {
    console.log("signin", userName, password, passwordConfirmation);
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/signin`,
      { userName, password, passwordConfirmation },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.body.message);
  }
};

export default { login, signIn };
