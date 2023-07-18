// import response from express
import { Response } from "express";

export const handleHttpError = (
  res: Response,
  message: string = "Something went wrong",
  code: number = 403
) => {
  res.status(code);
  res.send({ error: message });
};
