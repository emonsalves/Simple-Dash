import { jsonResponse } from "../lib/jsonResponse.js";

const refreshToken = async (req, res) => {
  const { user_name } = req.body;
 console.log("test", user_name)
  res.send("Refresh TokenASDAS!", user_name);
};

export const tokenController = {
  refreshToken,
};
