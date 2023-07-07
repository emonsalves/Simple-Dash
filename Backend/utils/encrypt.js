import bcrypt from "bcryptjs";

const encrypt = ({text}) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(text, salt);
};

export default encrypt;
