import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = ({ userName }) => {
  return jwt.sign({ userName }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};

const decodeToken = (token) => {
  return jwt.decode(token, process.env.SECRET_KEY);
};

const refreshToken = (token) => {
  const decoded = decodeToken(token);
  return generateToken(decoded.userName);
};

const veryRefreshToken = (token) => {
  const decoded = decodeToken(token);
  return verifyToken(decoded.userName);
};

export const jsonWBT = {
  generateToken,
  verifyToken,
  decodeToken,
  refreshToken,
  veryRefreshToken,
};
