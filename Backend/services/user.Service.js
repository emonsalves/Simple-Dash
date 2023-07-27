import dotenv from "dotenv";

import { htmlRecoveryMail } from "../lib/mailHTML.js";
import { User, Role } from "../models/index.js";
import { bcryptUtil } from "../utils/bcypt.Util.js";
import { jsonWBT } from "../utils/jwt.Util.js";
import { sendMail } from "../utils/mail.Util.js";

dotenv.config();

const login = async ({ userName, password }) => {
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

  return { status: 200, data: { accessToken, refreshToken, user }, ok: true };
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ["password"] },
    include: { model: Role, attributes: ["name"] },
  });
  return users
    ? { status: 200, data: { users }, ok: true }
    : { status: 404, data: { message: "Users not found" } };
};

const getUserByUsername = async ({ userName }) => {
  const existingUserName = await User.findOne({
    where: { user_name: userName },
  });

  const user = existingUserName?.dataValues;

  return existingUserName
    ? { status: 200, data: { user }, ok: true }
    : { status: 404, data: { message: "User not found" } };
};

const updateUserByUsername = async ({
  firstName,
  lastName,
  userName,
  phone,
  address,
  email,
}) => {

  const updatedUser = await User.update(
    { first_name: firstName, last_name: lastName, phone, address, email },
    { where: { user_name: userName } }
  );

  return updatedUser
    ? { status: 200, data: { userName }, ok: true }
    : { status: 404, data: { message: "User not found" } };
};

const deleteUserByUsername = async ({ userName }) => {
  const deletedUser = await User.destroy({ where: { user_name: userName } });
  return deletedUser
    ? { status: 200, data: { userName }, ok: true }
    : { status: 404, data: { message: "User not found" } };
};

const registerUser = async ({ userName, password }) => {
  const existingUserName = await User.findOne({
    where: { user_name: userName },
  });

  if (existingUserName) {
    return { status: 400, data: { message: "Username already exists" } };
  }

  const encryptedPassword = bcryptUtil.encrypt({ text: password });

  const newUserCreated = await User.create({
    user_name: userName,
    password: encryptedPassword,
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
    email: "",
  });

  return newUserCreated
    ? { status: 201, data: { userName }, ok: true }
    : { status: 404, data: { message: "User not found" } };
};

const recoveryPassword = async ({ userName, email }) => {
  const secureCode = "123456";
  const encryptedPassword = bcryptUtil.encrypt({ text: secureCode });
  const updatedUser = await User.update(
    { password: encryptedPassword },
    { where: { user_name: userName } }
  );

  if (!updatedUser) {
    return { status: 404, data: { message: "User not found" } };
  }

  sendMail({
    to: email,
    subject: "Recovery Password",
    textHtml: htmlRecoveryMail({
      userName,
      secureCode,
      soporteMail: process.env.MAIL_SUPPORT,
      linkResetPassword: process.env.MAIL_LINK_RESET_PASSWORD,
    }),
  });

  return { status: 200, data: { userName }, ok: true };
};

const updatePassword = async ({
  userName,
  resetCode,
  password,
  passwordConfirmation,
}) => {
  const user = await User.findOne({ where: { user_name: userName } });

  if (!user) {
    return { status: 404, data: { message: "User not found" } };
  }

  if (password !== passwordConfirmation) {
    return { status: 400, data: { message: "Passwords do not match" } };
  }

  const validResetCode = await bcryptUtil.compare({
    text: resetCode,
    hash: user.password,
  });

  if (!validResetCode) {
    return { status: 400, data: { message: "Invalid reset code" } };
  }

  const encryptedPassword = bcryptUtil.encrypt({ text: password });

  const newUpdateUser = await User.update(
    { password: encryptedPassword },
    { where: { user_name: userName } }
  );

  return newUpdateUser
    ? { status: 200, data: { message: "Password updated" }, ok: true }
    : { status: 500, data: { message: error.message } };
};

export const userService = {
  login,
  getAllUsers,
  getUserByUsername,
  updateUserByUsername,
  deleteUserByUsername,
  registerUser,
  recoveryPassword,
  updatePassword,
};
