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
  const { first_name, last_name, phone, address, email } = req.body;

  try {
    const result = await userService.updateUserByUsername({
      username,
      first_name,
      last_name,
      phone,
      address,
      email,
    });
    res.status(result.status).json(jsonResponse(result.status, result.data));
  } catch (error) {
    res.json(jsonResponse(res.status, { message: error.message }));
  }
};

const updatePassword = async (req, res) => {
  const { username } = req.params;
  const { resetCode, password, passwordConfirmation } = req.body;

  try {
    const result = await userService.updatePassword({
      username,
      resetCode,
      password,
      passwordConfirmation,
    });
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

const recoveryAccount = async (req, res) => {
  const { userName } = req.body;
  const userReset = await userService.getUserByUsername(userName);

  if (userReset.status !== 200) {
    return res
      .status(userReset.status)
      .json(jsonResponse(userReset.status, userReset.data));
  }

  const { user_name, email } = userReset.data.user;
  await userService.recoveryPassword({ userName: user_name, email });
  res.json(jsonResponse(200, { message: "Recovery Password" }));
};

export const userController = {
  login,
  getAll,
  getOne,
  update,
  updatePassword,
  deleted,
  register,
  logout,
  recoveryAccount,
};
