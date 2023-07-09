import bcrypt from "bcrypt";

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const encrypt = ({ text }) => bcrypt.hashSync(text, salt);

const compare = async ({ text, hash }) => await bcrypt.compare(text, hash);

export { encrypt, compare };
