import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const saltRounds = parseInt(process.env.SALT_ROUNDS);
const salt = bcrypt.genSaltSync(saltRounds);
const encrypt = ({ text }) => bcrypt.hashSync(text, salt);
const compare = async ({ text, hash }) => await bcrypt.compare(text, hash);

export const bcryptUtil = { encrypt, compare };
