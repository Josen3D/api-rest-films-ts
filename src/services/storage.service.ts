// import storage model
import StorageModel from "../models/storage.model";
// import storage interface
import { Storage } from "../interfaces/storage.interface";

// register the filename, iduser and path on DB and return response
export const registerUpload = async ({ fileName, path, idUser }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, path, idUser });
  return responseItem;
};
