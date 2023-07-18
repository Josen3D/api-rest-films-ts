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
  .post("/films", validatorCreateFilm, createItem)
  .put("/films/:id", validatorGetFilm, validatorCreateFilm, updateItem)
  .delete("/films/:id", validatorGetFilm, deleteItem);

// export router
export default router;
