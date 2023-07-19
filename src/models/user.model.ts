// import Schema, Types, model and Model from mongoose
import { Schema, model } from "mongoose";
// import film interface
import { User } from "../interfaces/user.interface";

// create films schema
const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "Im a new user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// export model
const UserModel = model("users", UserSchema);
export default UserModel;
