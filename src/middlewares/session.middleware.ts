import { NextFunction, Response } from "express";
import { verifyToken } from "../utils/jwt.handler";
import { handleHttpError } from "../utils/httpError.handler";
import { RequestExt } from "../interfaces/req-ext";

//verifies if JWT is correct
export const authMiddleware = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(" ").pop();
    const dataToken = (await verifyToken(`${jwt}`)) as { id: string };

    if (!dataToken) {
      handleHttpError(res, "NOT_JWT_VALID", 401);
      return;
    }

    req.user = dataToken;
    next();
  } catch (error) {
    handleHttpError(res, "NOT_SESSION", 401);
  }
};
