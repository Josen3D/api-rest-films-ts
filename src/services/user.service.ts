// import UserModel
import UserModel from "../models/user.model";
// import user interface
import { User } from "../interfaces/user.interface";

export const registerUser = async (item: User) => {
  const responseRegister = UserModel.create(item);
  return responseRegister;
};

export const loginUser = async (email: string) => {
  const responseLogin = await UserModel.findOne({ email });
  return responseLogin;
};
