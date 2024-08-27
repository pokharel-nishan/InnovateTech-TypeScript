import { Router } from "express";
import {
  createUser,
  deleteUser,
  fullUserUpdate,
  getParticularUser,
  getUsers,
  partialUserUpdate,
} from "../controller/user.controller";
import { handleAsync } from "../utils/handleAsync.utils";

const userRouter = Router();

userRouter.get("/", handleAsync(getUsers));

userRouter.get("/user", handleAsync(getParticularUser));

userRouter.post("/", handleAsync(createUser));

userRouter.patch("/", handleAsync(partialUserUpdate));

userRouter.put("/", handleAsync(fullUserUpdate));

userRouter.delete("/", handleAsync(deleteUser));

export default userRouter;
