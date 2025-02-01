"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_controller_1 = require("../controller/authentication.controller");
const authenticationRouter = (0, express_1.Router)();
authenticationRouter.post("/login", authentication_controller_1.logIn);
authenticationRouter.post("/logout", authentication_controller_1.logOut);
authenticationRouter.post("/signup", authentication_controller_1.signUp);
exports.default = authenticationRouter;
//# sourceMappingURL=authentication.route.js.map