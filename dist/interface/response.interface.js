"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerErrorHttpStatusCode = exports.ClientErrorHttpStatusCode = exports.SuccessHttpStatusCode = void 0;
var SuccessHttpStatusCode;
(function (SuccessHttpStatusCode) {
    SuccessHttpStatusCode[SuccessHttpStatusCode["GET"] = 200] = "GET";
    SuccessHttpStatusCode[SuccessHttpStatusCode["PUT"] = 200] = "PUT";
    SuccessHttpStatusCode[SuccessHttpStatusCode["PATCH"] = 200] = "PATCH";
    SuccessHttpStatusCode[SuccessHttpStatusCode["DELETE"] = 200] = "DELETE";
    SuccessHttpStatusCode[SuccessHttpStatusCode["POST"] = 201] = "POST";
    SuccessHttpStatusCode[SuccessHttpStatusCode["ACCEPTED"] = 202] = "ACCEPTED";
})(SuccessHttpStatusCode || (exports.SuccessHttpStatusCode = SuccessHttpStatusCode = {}));
var ClientErrorHttpStatusCode;
(function (ClientErrorHttpStatusCode) {
    ClientErrorHttpStatusCode[ClientErrorHttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ClientErrorHttpStatusCode[ClientErrorHttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    ClientErrorHttpStatusCode[ClientErrorHttpStatusCode["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    ClientErrorHttpStatusCode[ClientErrorHttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    ClientErrorHttpStatusCode[ClientErrorHttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    ClientErrorHttpStatusCode[ClientErrorHttpStatusCode["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    ClientErrorHttpStatusCode[ClientErrorHttpStatusCode["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    ClientErrorHttpStatusCode[ClientErrorHttpStatusCode["PAYLOAD_TO_LARGE"] = 413] = "PAYLOAD_TO_LARGE";
    ClientErrorHttpStatusCode[ClientErrorHttpStatusCode["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    ClientErrorHttpStatusCode[ClientErrorHttpStatusCode["UNPROCESSABLE_CONTENT"] = 422] = "UNPROCESSABLE_CONTENT";
})(ClientErrorHttpStatusCode || (exports.ClientErrorHttpStatusCode = ClientErrorHttpStatusCode = {}));
var ServerErrorHttpStatusCode;
(function (ServerErrorHttpStatusCode) {
    ServerErrorHttpStatusCode[ServerErrorHttpStatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(ServerErrorHttpStatusCode || (exports.ServerErrorHttpStatusCode = ServerErrorHttpStatusCode = {}));
//# sourceMappingURL=response.interface.js.map