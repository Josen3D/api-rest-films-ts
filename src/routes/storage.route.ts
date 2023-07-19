import { Router } from "express";
import { getFile } from "../controllers/storage.controller";
import multerMiddleware from "../middlewares/uploadFile.middleware";
import { authMiddleware } from "../middlewares/session.middleware";

const router = Router();

router.post(
  "/film/upload",
  authMiddleware,
  multerMiddleware.single("myfile"),
  getFile
);

export default router;
