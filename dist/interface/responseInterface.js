"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EServerErrorHttpStatusCode =
  exports.EClientErrorHttpStatusCode =
  exports.ESuccessHttpStatusCode =
    void 0;
var ESuccessHttpStatusCode;
(function (ESuccessHttpStatusCode) {
  ESuccessHttpStatusCode[(ESuccessHttpStatusCode["GET"] = 200)] = "GET";
  ESuccessHttpStatusCode[(ESuccessHttpStatusCode["PUT"] = 200)] = "PUT";
  ESuccessHttpStatusCode[(ESuccessHttpStatusCode["PATCH"] = 200)] = "PATCH";
  ESuccessHttpStatusCode[(ESuccessHttpStatusCode["DELETE"] = 200)] = "DELETE";
  ESuccessHttpStatusCode[(ESuccessHttpStatusCode["POST"] = 201)] = "POST";
  ESuccessHttpStatusCode[(ESuccessHttpStatusCode["ACCEPTED"] = 202)] =
    "ACCEPTED";
})(
  ESuccessHttpStatusCode ||
    (exports.ESuccessHttpStatusCode = ESuccessHttpStatusCode = {}),
);
var EClientErrorHttpStatusCode;
(function (EClientErrorHttpStatusCode) {
  EClientErrorHttpStatusCode[
    (EClientErrorHttpStatusCode["BAD_REQUEST"] = 400)
  ] = "BAD_REQUEST";
  EClientErrorHttpStatusCode[
    (EClientErrorHttpStatusCode["UNAUTHORIZED"] = 401)
  ] = "UNAUTHORIZED";
  EClientErrorHttpStatusCode[
    (EClientErrorHttpStatusCode["PAYMENT_REQUIRED"] = 402)
  ] = "PAYMENT_REQUIRED";
  EClientErrorHttpStatusCode[(EClientErrorHttpStatusCode["FORBIDDEN"] = 403)] =
    "FORBIDDEN";
  EClientErrorHttpStatusCode[(EClientErrorHttpStatusCode["NOT_FOUND"] = 404)] =
    "NOT_FOUND";
  EClientErrorHttpStatusCode[
    (EClientErrorHttpStatusCode["METHOD_NOT_ALLOWED"] = 405)
  ] = "METHOD_NOT_ALLOWED";
  EClientErrorHttpStatusCode[
    (EClientErrorHttpStatusCode["NOT_ACCEPTABLE"] = 406)
  ] = "NOT_ACCEPTABLE";
  EClientErrorHttpStatusCode[
    (EClientErrorHttpStatusCode["PAYLOAD_TO_LARGE"] = 413)
  ] = "PAYLOAD_TO_LARGE";
  EClientErrorHttpStatusCode[
    (EClientErrorHttpStatusCode["UNSUPPORTED_MEDIA_TYPE"] = 415)
  ] = "UNSUPPORTED_MEDIA_TYPE";
  EClientErrorHttpStatusCode[
    (EClientErrorHttpStatusCode["UNPROCESSABLE_CONTENT"] = 422)
  ] = "UNPROCESSABLE_CONTENT";
})(
  EClientErrorHttpStatusCode ||
    (exports.EClientErrorHttpStatusCode = EClientErrorHttpStatusCode = {}),
);
var EServerErrorHttpStatusCode;
(function (EServerErrorHttpStatusCode) {
  EServerErrorHttpStatusCode[
    (EServerErrorHttpStatusCode["INTERNAL_SERVER_ERROR"] = 500)
  ] = "INTERNAL_SERVER_ERROR";
})(
  EServerErrorHttpStatusCode ||
    (exports.EServerErrorHttpStatusCode = EServerErrorHttpStatusCode = {}),
);
//# sourceMappingURL=responseInterface.js.map
