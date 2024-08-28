"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = logIn;
exports.signUp = signUp;
exports.logOut = logOut;
const login_authentication_1 = require("../authentication/login.authentication");
const response_interface_1 = require("../interface/response.interface");
const signup_authentication_1 = require("../authentication/signup.authentication");
function logIn(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = req.body;
        return res
            .status(response_interface_1.SuccessHttpStatusCode.POST)
            .json({ Token: yield (0, login_authentication_1.login)(credentials) });
    });
}
function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body;
        return res.status(response_interface_1.SuccessHttpStatusCode.POST).json(yield (0, signup_authentication_1.signup)(user));
    });
}
function logOut(req, res) { }
//# sourceMappingURL=authentication.controller.js.map