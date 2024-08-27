"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const handleAsync_utils_1 = require("../utils/handleAsync.utils");
const userRouter = (0, express_1.Router)();
userRouter.get("/", (0, handleAsync_utils_1.handleAsync)(user_controller_1.getUsers));
userRouter.get("/", (0, handleAsync_utils_1.handleAsync)(user_controller_1.getParticularUser));
userRouter.post("/", (0, handleAsync_utils_1.handleAsync)(user_controller_1.createUser));
userRouter.patch("/", (0, handleAsync_utils_1.handleAsync)(user_controller_1.partialUserUpdate));
userRouter.put("/", (0, handleAsync_utils_1.handleAsync)(user_controller_1.fullUserUpdate));
userRouter.delete("/", (0, handleAsync_utils_1.handleAsync)(user_controller_1.deleteUser));
exports.default = userRouter;
//# sourceMappingURL=user.route.js.map