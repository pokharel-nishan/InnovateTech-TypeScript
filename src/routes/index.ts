import express from "express";
import userRouter from "./user.route";
import { handleAsync } from "../utils/handleAsync.utils";
import authenticationRouter from "./authentication.route";
import { auth } from "../middleware/authentication.middleware";

const router = express.Router();

router.use("/", authenticationRouter);

router.use("/user", auth, userRouter);

export default router;
