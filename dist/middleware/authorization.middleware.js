"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authorize;
const handlers_exception_1 = require("../exception/handlers.exception");
function authorize(allowedRoles) {
    return (req, res, next) => {
        const userRole = req.role;
        if (allowedRoles.includes(userRole)) {
            console.log(userRole, " : ", allowedRoles);
            return next();
        }
        throw new handlers_exception_1.UnauthorizedException("Unauthorized Resource.");
    };
}
//# sourceMappingURL=authorization.middleware.js.map