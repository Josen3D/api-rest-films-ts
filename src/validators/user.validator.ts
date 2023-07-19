// import check from express validator
import { check } from "express-validator";
import validateResult from "../utils/validator.handler";
import { NextFunction, Request, Response } from "express";

// create validator for Create
export const validatorCreateUser = [
  check("name").exists().notEmpty().isString(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isString(),
  check("description").exists().notEmpty().isString(),

  // validates the result of data
  (req: Request, res: Response, next: NextFunction) => {
    return validateResult(req, res, next);
  },
];

// create validator for Get
export const validatorGetUser = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isString(),

  // validates the result of data
  (req: Request, res: Response, next: NextFunction) => {
    return validateResult(req, res, next);
  },
];
