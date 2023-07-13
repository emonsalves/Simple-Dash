import axios from "axios";

const login = async ({ userName, password }) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/user/login`,
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


export default { login };