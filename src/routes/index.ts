import express from "express";
import userRouter from "./user.route";
import { handleAsync } from "../utils/handleAsync.utils";
import authenticationRouter from "./authentication.route";
import { auth } from "../middleware/authentication.middleware";
import adminRouter from "./admin.route";
import authorize from "../middleware/authorization.middleware";
import { Roles } from "../interface/roles.interface";

const router = express.Router();

router.use("/", authenticationRouter);

router.use("/user", auth, authorize([Roles.USER]), userRouter);

router.use("/admin/user", auth, authorize([Roles.ADMIN]), adminRouter);

export default router;
