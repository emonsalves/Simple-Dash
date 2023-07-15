import { User, Role } from "../models/index.js";
import { bcryptUtil } from "../utils/bcypt.Util.js";
import { jsonWBT } from "../utils/jwt.Util.js";

const login = async (userName, password) => {
  const user = await User.findOne({
    where: { user_name: userName },
    include: { model: Role, attributes: ["name"] },
  });


  if (!user) {
    return { status: 404, data: { message: "User not found" } };
  }

  const validPassword = await bcryptUtil.compare({
    text: password,
    hash: user.password,
  });

  if (!validPassword) {
    return { status: 400, data: { message: "Invalid password or user" } };
  }

  delete user.dataValues.password;

  const accessToken = jsonWBT.generateToken({ userName });
  const refreshToken = "refresh-token";

  return { status: 200, data: { accessToken, refreshToken, user } };
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return { status: 200, data: { users } };
};

const getUserByUsername = async (username) => {
  const existingUserName = await User.findOne({
    where: { user_name: username },
  });
  const user = new User(existingUserName.dataValues);

  return user
    ? { status: 200, data: { user, ok: true } }
    : { status: 404, data: { message: "User not found" } };
};

const updateUserByUsername = async (
  username,
  name,
  last_name,
  phone,
  address
) => {
  const updatedUser = await User.update(
    { name, last_name, phone, address },
    { where: { user_name: username } }
  );
  return updatedUser
    ? { status: 200, data: { username } }
    : { status: 404, data: { message: "User not found" } };
};

const deleteUserByUsername = async (username) => {
  const deletedUser = await User.destroy({ where: { user_name: username } });
  return deletedUser
    ? { status: 200, data: { username } }
    : { status: 404, data: { message: "User not found" } };
};

const registerUser = async (userName, password) => {
  const existingUserName = await User.findOne({
    where: { user_name: userName },
  });

  if (existingUserName) {
    return { status: 400, data: { message: "Username already exists" } };
  }

  try {
    const encryptedPassword = bcryptUtil.encrypt({ text: password });

    await User.create({
      user_name: userName,
      password: encryptedPassword,
      name: "Test",
      last_name: "Test",
      phone: "Test",
      address: "Test",
    });

    return { status: 201, data: { message: "User created" } };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const userService = {
  login,
  getAllUsers,
  getUserByUsername,
  updateUserByUsername,
  deleteUserByUsername,
  registerUser,
};
