import { Router } from "express";
import {
  createUser,
  deleteUser,
  fullUserUpdate,
  getParticularUser,
  getUsers,
  partialUserUpdate,
} from "../controller/admin.controller";
import { handleAsync } from "../utils/handleAsync.utils";

const adminRouter = Router();

adminRouter.get("/", handleAsync(getUsers));

adminRouter.get("/:id", handleAsync(getParticularUser));

adminRouter.post("/", handleAsync(createUser));

adminRouter.patch("/:id", handleAsync(partialUserUpdate));

adminRouter.put("/:id", handleAsync(fullUserUpdate));

adminRouter.delete("/:id", handleAsync(deleteUser));

export default adminRouter;
