"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceNotFound = exports.ResourceForbidden = exports.UnauthorizedException = exports.BadRequest = exports.HttpError = exports.ServerError = exports.ProgramError = void 0;
const response_interface_1 = require("../interface/response.interface");
class ProgramError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = "ProgramError";
    }
}
exports.ProgramError = ProgramError;
class ServerError extends ProgramError {
    constructor(message = "Server Error", status = response_interface_1.EServerErrorHttpStatusCode.INTERNAL_SERVER_ERROR) {
        super(message, status);
        this.name = "ServerError";
    }
}
exports.ServerError = ServerError;
class HttpError extends ProgramError {
    constructor(message = "Client Error", status = response_interface_1.EClientErrorHttpStatusCode.BAD_REQUEST) {
        super(message, status);
        this.status = status;
        this.name = "HttpError";
    }
}
exports.HttpError = HttpError;
class BadRequest extends HttpError {
    constructor(message = "Bad Request", status = response_interface_1.EClientErrorHttpStatusCode.BAD_REQUEST) {
        super(message, status);
        this.name = "BadRequest";
    }
}
exports.BadRequest = BadRequest;
class UnauthorizedException extends HttpError {
    constructor(message = "Unauthorized Exception", status = response_interface_1.EClientErrorHttpStatusCode.UNAUTHORIZED) {
        super(message, status);
        this.name = "UnauthorizedException";
    }
}
exports.UnauthorizedException = UnauthorizedException;
class ResourceForbidden extends HttpError {
    constructor(message = "Forbidden Resource", status = response_interface_1.EClientErrorHttpStatusCode.FORBIDDEN) {
        super(message, status);
        this.name = "ResourceForbidden";
    }
}
exports.ResourceForbidden = ResourceForbidden;
class ResourceNotFound extends HttpError {
    constructor(message = "Resource Not Found", status = response_interface_1.EClientErrorHttpStatusCode.NOT_FOUND) {
        super(message, status);
        this.name = "ResourceNotFound";
    }
}
exports.ResourceNotFound = ResourceNotFound;
//# sourceMappingURL=handlers.exception.js.map