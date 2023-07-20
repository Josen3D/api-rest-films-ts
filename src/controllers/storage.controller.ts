// import request, response from express and request extend from interfaces/req-ext.ts
import { Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
// import storage interface
import { Storage } from "../interfaces/storage.interface";
// import register upload from storage services
import {
  registerUpload,
  getAllFilms,
  getOneFilm,
} from "../services/storage.service";
// import handle http error from utils/httpError.handler.ts
import { handleHttpError } from "../utils/httpError.handler";
// import matched data from express validator
import { matchedData } from "express-validator";

export const getFile = async (req: RequestExt, res: Response) => {
  try {
    // get user and file send
    const { user, file } = req;
    const dataToRegister: Storage = {
      // save filename, path and iduser from request
      fileName: `${file?.filename}`,
      path: `${file?.path}`,
      idUser: `${user?.id}`,
    };
    const response = await registerUpload(dataToRegister);
    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_FILE: " + error);
  }
};

/**
 * Devuelve lista de registros en DB
 * @param req
 * @param res
 */
export const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getAllFilms();
    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS: " + error);
  }
};

/**
 * Devuelve un registro del la DB
 * @param req
 * @param res
 */
export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    const response = await getOneFilm(id);

    if (!response) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS: " + error);
  }
};
