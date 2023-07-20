// import check from express validator
import { check } from "express-validator";
import validateResult from "../utils/validator.handler";
import { NextFunction, Request, Response } from "express";

// create validator for Create
export const validatorCreateFilm = [
  check("title").exists().notEmpty().isString(),
  check("director").exists().notEmpty().isString(),
  check("premiere").exists().notEmpty().isNumeric(),
  check("country").exists().notEmpty().isArray(),
  check("genres").exists().notEmpty().isArray(),
  check("score").exists().notEmpty().isNumeric(),
  check("mediaId").exists().notEmpty().isMongoId(),

  // validates the result of data
  (req: Request, res: Response, next: NextFunction) => {
    return validateResult(req, res, next);
  },
];

// create validator for Get
export const validatorGetFilm = [
  check("id").exists().notEmpty().isMongoId(),

  // validates the result of data
  (req: Request, res: Response, next: NextFunction) => {
    return validateResult(req, res, next);
  },
];
