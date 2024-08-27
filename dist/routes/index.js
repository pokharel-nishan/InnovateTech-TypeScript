"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./user.route"));
const authentication_route_1 = __importDefault(require("./authentication.route"));
const authentication_middleware_1 = require("../middleware/authentication.middleware");
const router = express_1.default.Router();
router.use("/", authentication_route_1.default);
router.use("/user", authentication_middleware_1.auth, user_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map