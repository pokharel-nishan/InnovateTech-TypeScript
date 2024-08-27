"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
module.exports = authorize;
//# sourceMappingURL=authorization.middleware.js.map