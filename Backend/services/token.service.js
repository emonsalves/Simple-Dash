import dotenv from "dotenv";

import { User, Role } from "../models/index.js";
import { jsonWBT } from "../utils/jwt.Util.js";

dotenv.config();

const getNewToken = async ({ userName }) => {
  const user = await User.findOne({
    where: { user_name: userName },
    include: { model: Role, attributes: ["name"] },
  });

  if (!user) {
    return { status: 404, data: { message: "User not found" } };
  }

  delete user.dataValues.password;

  const accessToken = jsonWBT.generateToken({ userName });
  const refreshToken = "refresh-token";

  return { status: 200, data: { accessToken, refreshToken, user }, ok: true };
};

export const tokenService = {
  getNewToken,
};
