// import dotenv config
import "dotenv/config";
// import express
import express from "express";
// import cors
import cors from "cors";

// import db connection
import dbConnect from "./config/mongo";

import { Request, Response, NextFunction } from "express";

// import film routes
import filmRoutes from "./routes/film.routes";
// import auth routes
import authRoutes from "./routes/auth.routes";
// import storage routes
import storageRoutes from "./routes/storage.route";

// create express app
const app = express();

// use middlewares
app.use(cors());
app.use(express.json());

app.use("/api", filmRoutes);
app.use("/api", authRoutes);
app.use("/api", storageRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "endpoint not found" });
});

const PORT = process.env.PORT || 3000;

// put server to listen
app.listen(PORT, () => console.log("Server runing on port:", PORT));
// connect to DB
dbConnect().then(() => console.log("Connected to MongoDB"));
