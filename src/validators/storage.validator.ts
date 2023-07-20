// import check from express validator
import { check } from "express-validator";
import validateResult from "../utils/validator.handler";
import { NextFunction, Request, Response } from "express";

// create validator for Get
export const validatorGetStorage = [
  check("id").exists().notEmpty().isMongoId(),

  // validates the result of data
  (req: Request, res: Response, next: NextFunction) => {
    return validateResult(req, res, next);
  },
];
