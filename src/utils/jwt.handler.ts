// import sign and verify from json web token
import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret-token010123";

//generates the token
export const tokenSign = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

//verifies if the token is correct
export const verifyToken = async (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};
