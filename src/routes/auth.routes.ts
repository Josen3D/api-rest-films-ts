// import router from express
import { Router } from "express";
// import film controllers
import { register, login } from "../controllers/auth.controller";

// import validators
import {
  validatorCreateUser,
  validatorGetUser,
} from "../validators/user.validator";

// create router
const router = Router();

router
  .post("/auth/register", validatorCreateUser, register)
  .post("/auth/login", validatorGetUser, login);

// export router
export default router;
