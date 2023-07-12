import axios from "axios";

const createUser = async ({ userName, password, passwordConfirmation }) => {
    try {
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

  export default { createUser };