// import Schema, Types, model and Model from mongoose
import { Schema, model } from "mongoose";
// import film interface
import { Storage } from "../interfaces/storage.interface";

// create films schema
const StorageSchema = new Schema<Storage>(
  {
    fileName: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    idUser: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// export model
const StorageModel = model("storage", StorageSchema);
export default StorageModel;
