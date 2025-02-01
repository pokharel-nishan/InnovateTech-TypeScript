"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controller/admin.controller");
const handleAsync_utils_1 = require("../utils/handleAsync.utils");
const adminRouter = (0, express_1.Router)();
adminRouter.get("/", (0, handleAsync_utils_1.handleAsync)(admin_controller_1.getUsers));
adminRouter.get("/:id", (0, handleAsync_utils_1.handleAsync)(admin_controller_1.getParticularUser));
adminRouter.post("/", (0, handleAsync_utils_1.handleAsync)(admin_controller_1.createUser));
adminRouter.patch("/:id", (0, handleAsync_utils_1.handleAsync)(admin_controller_1.partialUserUpdate));
adminRouter.put("/:id", (0, handleAsync_utils_1.handleAsync)(admin_controller_1.fullUserUpdate));
adminRouter.delete("/:id", (0, handleAsync_utils_1.handleAsync)(admin_controller_1.deleteUser));
exports.default = adminRouter;
//# sourceMappingURL=admin.route.js.map