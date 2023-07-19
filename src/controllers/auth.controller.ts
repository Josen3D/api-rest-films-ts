// import matched data
import { matchedData } from "express-validator";
// import compare and encrypt password
import { verify, encrypt } from "../utils/encryptPassword.handler";
// import token sign
import { tokenSign } from "../utils/jwt.handler";
// import handle error
import { handleHttpError } from "../utils/httpError.handler";
// import user services
import { registerUser, loginUser } from "../services/user.service";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  try {
    const request = matchedData(req);
    const password = await encrypt(request.password);
    const body = { ...request, password };

    const responseUser = await registerUser(<any>body); //create the user on DB
    responseUser.set("password", undefined, { strict: false }); // hide the password on the response

    const data = {
      token: await tokenSign(responseUser.email),
      user: responseUser,
    };
    res.status(201).json(data);
  } catch (error) {
    handleHttpError(res, "ERROR_REGISTER_USER: " + error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const request = matchedData(req);
    const user = await loginUser(request.email);

    //if user doesnt exist return the function
    if (!user) {
      handleHttpError(res, "USER_NOT_EXISTS", 404);
      return;
    }

    // saves the hash password from user on DB
    const hashPassword = user.password;
    //compare the password and the hash password and verify if it matches
    const check = await verify(request.password, hashPassword);

    if (!check) {
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return;
    }

    //hide the password on the response
    user.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(user.email),
      user,
    };
    res.status(200).json(data);
  } catch (error) {
    handleHttpError(res, "ERROR_REGISTER_USER: " + error);
  }
};
