// import Schema, Types, model and Model from mongoose
import { Schema, model } from "mongoose";
// import film interface
import { Film } from "../interfaces/film.interface";

// create films schema
const FilmSchema = new Schema<Film>(
  {
    title: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    premiere: {
      type: Number,
      required: true,
    },
    country: {
      type: new Array(),
      required: true,
    },
    genres: {
      type: new Array(),
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// export model
const FilmModel = model("films", FilmSchema);
export default FilmModel;
