// import dotenv config
import "dotenv/config";
// import express
import express from "express";
// import cors
import cors from "cors";

import { Request, Response } from "express";

// create express app
const app = express();

// use middlewares
app.use(cors());
app.use(express.json());

app.use("/api", (req: Request, res: Response) => {
  res.send({ message: "Hola mundo" });
});

const PORT = process.env.PORT || 3000;

// put server to listen
app.listen(PORT, () => console.log("Server runing on port:", PORT));
