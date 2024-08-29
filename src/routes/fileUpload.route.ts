import { Router } from 'express';
import upload from '../utils/file-upload.util';

const fileUploadRouter = Router();

fileUploadRouter.post('/', upload.single('file'), (req, res) => {
  res.json({ message: "File uploaded successfully." })
});

export default fileUploadRouter;