"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./user.route"));
const authentication_route_1 = __importDefault(require("./authentication.route"));
const authentication_middleware_1 = require("../middleware/authentication.middleware");
const admin_route_1 = __importDefault(require("./admin.route"));
const authorization_middleware_1 = __importDefault(require("../middleware/authorization.middleware"));
const roles_interface_1 = require("../interface/roles.interface");
const router = express_1.default.Router();
router.use("/", authentication_route_1.default);
router.use("/user", authentication_middleware_1.auth, (0, authorization_middleware_1.default)([roles_interface_1.Roles.USER]), user_route_1.default);
router.use("/admin/user", authentication_middleware_1.auth, (0, authorization_middleware_1.default)([roles_interface_1.Roles.ADMIN]), admin_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map