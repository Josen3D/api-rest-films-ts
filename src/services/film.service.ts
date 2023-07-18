// import film model
import FilmModel from "../models/film.model";
// import film interface
import { Film } from "../interfaces/film.interface";

export const getFilms = async () => {
  const responseGet = await FilmModel.find({});
  return responseGet;
};

export const getFilm = async (id: string) => {
  const responseGet = await FilmModel.findOne({ _id: id });
  return responseGet;
};

export const createNewFilm = async (item: Film) => {
  const responseCreate = await FilmModel.create(item);
  return responseCreate;
};

export const updateOneFilm = async (id: string, itemUpdated: Film) => {
  const responseUpdate = await FilmModel.findOneAndUpdate(
    { _id: id },
    itemUpdated,
    { new: true } // configuration: return the item updated
  );
  return responseUpdate;
};

export const deleteOneFilm = async (id: string) => {
  const responseDelete = await FilmModel.findOneAndRemove({ _id: id });
  return responseDelete;
};
