// import Request from express
import { Request } from "express";
// import multer and diskStorage from multer
import multer, { diskStorage } from "multer";

// create path storage
const PATH_STORAGE = `${process.cwd()}/src/storage`;

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const randomFileName = `video-${Date.now()}.${ext}`;
    cb(null, randomFileName);
  },
});

const multerMiddleware = multer({ storage });

// export multer middleware
export default multerMiddleware;
