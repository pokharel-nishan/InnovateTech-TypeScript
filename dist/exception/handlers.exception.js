"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceNotFound = exports.ResourceForbidden = exports.UnauthorizedException = exports.BadRequest = exports.HttpError = exports.ServerError = exports.ProgramError = void 0;
class ProgramError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = "ProgramError";
    }
}
exports.ProgramError = ProgramError;
class ServerError extends ProgramError {
    constructor(message = "Server Error", status = 500) {
        super(message, status);
        this.name = "ServerError";
    }
}
exports.ServerError = ServerError;
class HttpError extends ProgramError {
    constructor(message = "Client Error", status = 400) {
        super(message, status);
        this.status = status;
        this.name = "HttpError";
    }
}
exports.HttpError = HttpError;
class BadRequest extends HttpError {
    constructor(message = "Bad Request", status = 400) {
        super(message, status);
        this.name = "BadRequest";
    }
}
exports.BadRequest = BadRequest;
class UnauthorizedException extends HttpError {
    constructor(message = "Unauthorized Exception", status = 401) {
        super(message, status);
        this.name = "UnauthorizedException";
    }
}
exports.UnauthorizedException = UnauthorizedException;
class ResourceForbidden extends HttpError {
    constructor(message = "Forbidden Resource", status = 403) {
        super(message, status);
        this.name = "ResourceForbidden";
    }
}
exports.ResourceForbidden = ResourceForbidden;
class ResourceNotFound extends HttpError {
    constructor(message = "Resource Not Found", status = 404) {
        super(message, status);
        this.name = "ResourceNotFound";
    }
}
exports.ResourceNotFound = ResourceNotFound;
//# sourceMappingURL=handlers.exception.js.map