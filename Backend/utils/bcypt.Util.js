import bcrypt from "bcrypt";
import dotenv from "dotenv";

const saltRounds = parseInt(dotenv.config().parsed.SALT_ROUNDS);

const salt = bcrypt.genSaltSync(saltRounds);
const encrypt = ({ text }) => bcrypt.hashSync(text, salt);
const compare = async ({ text, hash }) => await bcrypt.compare(text, hash);

export const bcryptUtil = { encrypt, compare };
