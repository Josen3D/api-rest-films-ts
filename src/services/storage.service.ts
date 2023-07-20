// import storage model
import StorageModel from "../models/storage.model";
// import storage interface
import { Storage } from "../interfaces/storage.interface";

// register the filename, iduser and path on DB and return response
export const registerUpload = async ({ fileName, path, idUser }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, path, idUser });
  return responseItem;
};

export const getAllFilms = async () => {
  const responseGet = await StorageModel.find({});
  return responseGet;
};

export const getOneFilm = async (id: string) => {
  const responseGet = await StorageModel.findOne({ _id: id });
  return responseGet;
};
