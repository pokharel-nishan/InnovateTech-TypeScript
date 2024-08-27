"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const userRouter = (0, express_1.Router)();
userRouter.get("/", user_controller_1.getUsers);
userRouter.post("/");
userRouter.patch("/");
userRouter.put("/");
userRouter.delete("/");
exports.default = userRouter;
//# sourceMappingURL=userRoute.js.map
