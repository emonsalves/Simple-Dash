import { jsonResponse } from "../lib/jsonResponse.js";
import { tokenService } from "../services/token.service.js";

const refreshToken = async (req, res) => {
  const { user_name } = req.body;
  try {
    const result = await tokenService.getNewToken({ user_name });
    res.status(result.status).json(jsonResponse(result.status, result.data));
  } catch (error) {
    res.json(jsonResponse(res.status, { message: error.message }));
  }
};

export const tokenController = {
  refreshToken,
};
