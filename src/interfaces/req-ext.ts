// import jwt payload from jsonwebtoken
import { JwtPayload } from "jsonwebtoken";
// import request from express
import { Request } from "express";

//creates an interface of Request extended for add user to req
export interface RequestExt extends Request {
  user?: JwtPayload | { id: string };
}
