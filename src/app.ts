import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import { mongoDBConnection } from "./database/mongoose.database";
import { ServerError } from "./exception/handlers.exception";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  try {
    mongoDBConnection();
    console.log("Database Connection Established.");
  } catch {
    throw new ServerError("Problem Connecting to database.");
  }
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
