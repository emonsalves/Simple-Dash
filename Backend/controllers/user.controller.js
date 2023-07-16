import { jsonResponse } from "../lib/jsonResponse.js";
import { userService } from "../services/user.service.js";

const login = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Missing required fields" }));
  }

  try {
    const result = await userService.login(userName, password);
    res.status(result.status).json(jsonResponse(result.status, result.data));
  } catch (error) {
    res.json(jsonResponse(res.status, { message: error.message }));
  }
};

const getAll = async (req, res) => {
  try {
    const result = await userService.getAllUsers();
    res.status(result.status).json(jsonResponse(result.status, result.data));
  } catch (error) {
    res.json(jsonResponse(res.status, { message: error.message }));
  }
};

const getOne = async (req, res) => {
  const { username } = req.params;

  try {
    const result = await userService.getUserByUsername(username);
    res.status(result.status).json(jsonResponse(result.status, result.data));
  } catch (error) {
    res.json(jsonResponse(res.status, { message: error.message }));
  }
};

const update = async (req, res) => {
  const { username } = req.params;
  const { name, last_name, phone, address } = req.body;

  try {
    const result = await userService.updateUserByUsername(
      username,
      name,
      last_name,
      phone,
      address
    );
    res.status(result.status).json(jsonResponse(result.status, result.data));
  } catch (error) {
    res.json(jsonResponse(res.status, { message: error.message }));
  }
};

const deleted = async (req, res) => {
  const { username } = req.params;

  try {
    const result = await userService.deleteUserByUsername(username);
    res.status(result.status).json(jsonResponse(result.status, result.data));
  } catch (error) {
    res.json(jsonResponse(res.status, { message: error.message }));
  }
};

const register = async (req, res) => {
  const { userName, password, passwordConfirmation } = req.body;

  if (password !== passwordConfirmation) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Passwords or do not match" }));
  }

  if (!userName || !password || !passwordConfirmation) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Missing required fields" }));
  }

  try {
    const result = await userService.registerUser(userName, password);
    res.status(result.status).json(jsonResponse(result.status, result.data));
  } catch (error) {
    res.json(jsonResponse(res.status, { message: error.message }));
  }
};

const logout = (req, res) => {
  res.json(jsonResponse(200, { message: "Logout" }));
};

export const userController = {
  login,
  getAll,
  getOne,
  update,
  deleted,
  register,
  logout,
};
