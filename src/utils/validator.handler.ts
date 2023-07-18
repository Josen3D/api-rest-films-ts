// import validation result from express validator
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

// validates if data results are correct
const validateResult = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ errors: error });
  }
};

export default validateResult;
