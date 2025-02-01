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
exports.signup = signup;
const user_data_access_1 = require("../data-access/user.data-access");
const handlers_exception_1 = require("../exception/handlers.exception");
const encryption_util_1 = require("../utils/encryption.util");
function signup(userObj) {
    return __awaiter(this, void 0, void 0, function* () {
        const { password } = userObj;
        const encryptedPassword = (0, encryption_util_1.encrypt)(password);
        userObj.password = encryptedPassword;
        const isSuccess = (0, user_data_access_1.postUser)(userObj);
        if (!isSuccess) {
            throw new handlers_exception_1.HttpError("Problem creating the user.");
        }
        return isSuccess;
    });
}
//# sourceMappingURL=signup.authentication.js.map