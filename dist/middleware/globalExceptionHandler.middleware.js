"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalExceptionHandler = globalExceptionHandler;
function globalExceptionHandler(err, req, res, next) {
    const { status = 500, message = "Unexpected Error occurred." } = err;
    return res.status(status).json({ Message: message });
}
//# sourceMappingURL=globalExceptionHandler.middleware.js.map