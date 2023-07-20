import { Router } from "express";
// import storage controllers
import { getFile, getItems, getItem } from "../controllers/storage.controller";
// import upload file middleware
import multerMiddleware from "../middlewares/uploadFile.middleware";
// import session middleware
import { authMiddleware } from "../middlewares/session.middleware";
// import validator get storage
import { validatorGetStorage } from "../validators/storage.validator";

const router = Router();

router
  .get("/storage", getItems)
  .get("/storage/:id", validatorGetStorage, getItem)
  .post(
    "/storage",
    authMiddleware,
    multerMiddleware.single("myfile"),
    getFile
  );

export default router;
