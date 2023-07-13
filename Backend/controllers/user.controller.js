import { jsonResponse } from "../lib/jsonResponse.js";
import { User, Role } from "../models/index.js";
import { bcryptUtil } from "../utils/bcypt.js";

const login = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Missing required fields" }));
  }

  const user = await User.findOne({
    where: { user_name: userName },
    include: { model: Role, attributes: ["name"] },
  });

  if (!user) {
    return res
      .status(404)
      .json(jsonResponse(404, { message: "User not found" }));
  }

  const validPassword = await bcryptUtil.compare({
    text: password,
    hash: user.password,
  });

  if (!validPassword) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Invalid password or user" }));
  }

  delete user.dataValues.password;

  const accessToken = "access-token";
  const refreshToken = "refresh-token";

  res.status(200).json(jsonResponse(200, { accessToken, refreshToken, user }));
};

const getAll = async (req, res) => {
  const users = await User.findAll();
  res.json(jsonResponse(200, { users }));
};

const getOne = async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ where: { user_name: username } });
  user
    ? res.json(jsonResponse(200, { user, ok: true }))
    : res.json(jsonResponse(404, { message: "User not found" }));
};

const update = async (req, res) => {
  const { username } = req.params;
  const { name, last_name, phone, address } = req.body;
  const updatedUser = await User.update(
    {
      name,
      last_name,
      phone,
      address,
    },
    { where: { user_name: username } }
  );
  updatedUser
    ? res.json(jsonResponse(200, { username }))
    : res.json(jsonResponse(404, { message: "User not found" }));
};

const deleted = async (req, res) => {
  const { username } = req.params;
  const deletedUser = await User.destroy({ where: { user_name: username } });
  deletedUser
    ? res.json(jsonResponse(200, { username }))
    : res.json(jsonResponse(404, { message: "User not found" }));
};

const register = async (req, res) => {
  const { userName, password, passwordConfirmation } = req.body;

  if (password !== passwordConfirmation) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Passwords do not match" }));
  }

  if (!userName || !password || !passwordConfirmation) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Missing required fields" }));
  }

  try {
    const existingUserName = await User.findOne({
      where: { user_name: userName },
    });

    if (existingUserName) {
      return res
        .status(400)
        .json(jsonResponse(400, { message: "Username already exists" }));
    }

    const encryptedPassword = bcryptUtil.encrypt({ text: password });

    await User.create({
      user_name: userName,
      password: encryptedPassword,
      name: "Test",
      last_name: "Test",
      // email: "test",
      phone: "Test",
      address: "Test",
    });
    res.status(201).json(jsonResponse(201, { message: "User created" }));
  } catch (error) {
    res.status(500).json(jsonResponse(500, { message: error.message }));
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
