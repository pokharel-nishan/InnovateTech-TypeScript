import {
  ClientErrorHttpStatusCode,
  ServerErrorHttpStatusCode,
} from "../interface/response.interface";

export class ProgramError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = "ProgramError";
  }
}

export class ServerError extends ProgramError {
  constructor(
    message = "Server Error",
    status = ServerErrorHttpStatusCode.INTERNAL_SERVER_ERROR,
  ) {
    super(message, status);
    this.name = "ServerError";
  }
}

export class HttpError extends ProgramError {
  constructor(
    message = "Client Error",
    status = ClientErrorHttpStatusCode.BAD_REQUEST,
  ) {
    super(message, status);
    this.status = status;
    this.name = "HttpError";
  }
}

export class BadRequest extends HttpError {
  constructor(
    message = "Bad Request",
    status = ClientErrorHttpStatusCode.BAD_REQUEST,
  ) {
    super(message, status);
    this.name = "BadRequest";
  }
}

export class UnauthorizedException extends HttpError {
  constructor(
    message = "Unauthorized Exception",
    status = ClientErrorHttpStatusCode.UNAUTHORIZED,
  ) {
    super(message, status);
    this.name = "UnauthorizedException";
  }
}

export class ResourceForbidden extends HttpError {
  constructor(
    message = "Forbidden Resource",
    status = ClientErrorHttpStatusCode.FORBIDDEN,
  ) {
    super(message, status);
    this.name = "ResourceForbidden";
  }
}

export class ResourceNotFound extends HttpError {
  constructor(
    message = "Resource Not Found",
    status = ClientErrorHttpStatusCode.NOT_FOUND,
  ) {
    super(message, status);
    this.name = "ResourceNotFound";
  }
}
