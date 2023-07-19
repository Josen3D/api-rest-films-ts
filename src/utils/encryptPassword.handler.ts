// import hash and compare from bcryptjs
import { compare, hash } from "bcryptjs";

// encrypt the password
export const encrypt = async (passwordPlain: string) => {
  const passwordHash = await hash(passwordPlain, 8);
  return passwordHash;
};

//verify if passwordHash corresponds to passwordPlain
export const verify = async (password: string, hashPassword: string) => {
  const isCorrect = await compare(password, hashPassword);
  return isCorrect;
};
