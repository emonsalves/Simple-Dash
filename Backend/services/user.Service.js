import dotenv from "dotenv";

import { htmlRecoveryMail } from "../lib/mailHTML.js";
import { User, Role } from "../models/index.js";
import { bcryptUtil } from "../utils/bcypt.Util.js";
import { jsonWBT } from "../utils/jwt.Util.js";
import { sendMail } from "../utils/mail.Util.js";

dotenv.config();

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
  const users = await User.findAll({
    attributes: { exclude: ["password"] },
    include: { model: Role, attributes: ["name"] },
  });
  return { status: 200, data: { users } };
};

const getUserByUsername = async (username) => {
  const existingUserName = await User.findOne({
    where: { user_name: username },
  });
  const user = existingUserName?.dataValues;

  return existingUserName
    ? { status: 200, data: { user, ok: true } }
    : { status: 404, data: { message: "User not found" } };
};

const updateUserByUsername = async ({
  first_name,
  last_name,
  username,
  phone,
  address,
}) => {
  const updatedUser = await User.update(
    { first_name, last_name, phone, address },
    { where: { user_name: username } }
  );
  return updatedUser
    ? { status: 200, data: { username } }
    : { status: 404, data: { message: "User not found" } };
};

const deleteUserByUsername = async ({ username }) => {
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
      first_name: "",
      last_name: "",
      address: "",
      phone: "",
      email: "",
    });
    return { status: 201, data: { message: "User created" } };
  } catch (error) {
    return { status: 500, data: { message: error.message } };
  }
};

const recoveryPassword = async ({ userName, email }) => {
  const secureCode = "123456";
  const encryptedPassword = bcryptUtil.encrypt({ text: secureCode });
  const updatedUser = await User.update(
    { password: encryptedPassword },
    { where: { user_name: userName } }
  );

  sendMail({
    to: email,
    subject: "Recovery Password",
    textHtml: htmlRecoveryMail({
      userName,
      secureCode,
      soporteMail: process.env.MAIL_SUPPORT,
    }),
  });

  return updatedUser;
};

export const userService = {
  login,
  getAllUsers,
  getUserByUsername,
  updateUserByUsername,
  deleteUserByUsername,
  registerUser,
  recoveryPassword,
};
