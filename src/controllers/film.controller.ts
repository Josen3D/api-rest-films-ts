// import request and response from express
import { Request, Response, response } from "express";
// import http error handler from utils/httpError.handler.ts
import { handleHttpError } from "../utils/httpError.handler";
// import matched data from express-validator
import { matchedData } from "express-validator";
// import film services
import {
  getFilms,
  getFilm,
  createNewFilm,
  updateOneFilm,
  deleteOneFilm,
} from "../services/film.service";

/**
 * Devualve los registros de la DB
 * @param req
 * @param res
 */
export const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getFilms();
    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS: " + error);
  }
};

/**
 * Devuelve un registro de la DB
 * @param req
 * @param res
 */
export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    const response = await getFilm(id);

    if (!response) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM: " + error);
  }
};

/**
 * Crea un nuevo registro en la DB
 * @param req
 * @param res
 */
export const createItem = async (req: Request, res: Response) => {
  try {
    const body = matchedData(req);
    const response = await createNewFilm(<any>body);
    res.status(201).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEMS: " + error);
  }
};

/**
 * Actualiza un registro de la DB
 * @param req
 * @param res
 */
export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id, ...body } = matchedData(req);
    const response = await updateOneFilm(id, <any>body);

    if (!response) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_ITEMS: " + error);
  }
};

/**
 * Elimina un registro de la DB
 * @param req
 * @param res
 * @returns
 */
export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    const response = await deleteOneFilm(id);

    if (!response) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    res.status(200).json({ message: "item deleted" });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEMS: " + error);
  }
};
