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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = getAllUsers;
exports.findParticularUser = findParticularUser;
exports.postUser = postUser;
exports.updateUser = updateUser;
exports.removeUser = removeUser;
const handlers_exception_1 = require("../exception/handlers.exception");
const user_model_1 = __importDefault(require("../models/user.model"));
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userData = yield user_model_1.default.find();
            return userData;
        }
        catch (err) {
            throw new handlers_exception_1.ServerError(err.message);
        }
    });
}
function findParticularUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.findById({
                _id: userId,
            });
            return user;
        }
        catch (err) {
            throw new handlers_exception_1.ServerError(err.message);
        }
    });
}
function postUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = yield user_model_1.default.create(user);
            return newUser;
        }
        catch (err) {
            throw new handlers_exception_1.ServerError(err.message);
        }
    });
}
function updateUser(userId, updateValues) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield user_model_1.default.findByIdAndUpdate(userId, updateValues);
            return true;
        }
        catch (err) {
            throw new handlers_exception_1.ServerError(err.message);
        }
    });
}
function removeUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const isSuccess = yield user_model_1.default.deleteOne({ _id: userId });
            return isSuccess;
        }
        catch (err) {
            throw new handlers_exception_1.ServerError(err.message);
        }
    });
}
//# sourceMappingURL=user.data-access.js.map