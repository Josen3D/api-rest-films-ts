// import router from express
import { Router } from "express";
// import film controllers
import {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/film.controller";

// import authMiddleware
import { authMiddleware } from "../middlewares/session.middleware";

// import validators
import {
  validatorCreateFilm,
  validatorGetFilm,
} from "../validators/film.validator";

// create router
const router = Router();

router
  .get("/films", getItems)
  .get("/films/:id", validatorGetFilm, getItem)
  .post("/films", authMiddleware, validatorCreateFilm, createItem)
  .put("/films/:id", authMiddleware, validatorGetFilm, validatorCreateFilm, updateItem)
  .delete("/films/:id", authMiddleware, validatorGetFilm, deleteItem);

// export router
export default router;
