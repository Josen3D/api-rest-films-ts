// import response from express and request extend from interfaces/req-ext.ts
import { Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
// import storage interface
import { Storage } from "../interfaces/storage.interface";
// import register upload from storage services
import { registerUpload } from "../services/storage.service";
// import handle http error from utils/httpError.handler.ts
import { handleHttpError } from "../utils/httpError.handler";

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
