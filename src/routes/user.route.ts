import { Router } from "express";
import {
  deleteUser,
  fullUserUpdate,
  getParticularUser,
  partialUserUpdate,
} from "../controller/user.controller";
import { handleAsync } from "../utils/handleAsync.utils";

const userRouter = Router();

userRouter.get("/", handleAsync(getParticularUser));

userRouter.patch("/", handleAsync(partialUserUpdate));

userRouter.put("/", handleAsync(fullUserUpdate));

userRouter.delete("/", handleAsync(deleteUser));

export default userRouter;
