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
const user_data_access_1 = require("../data-access/user.data-access");
const handlers_exception_1 = require("../exception/handlers.exception");
const encryption_util_1 = require("../utils/encryption.util");
const { v4: uuid } = require("uuid");
const userService = {
    getParticularUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, user_data_access_1.findParticularUser)(userId);
            if (user) {
                return user;
            }
            throw new handlers_exception_1.ResourceNotFound("User Not Found.");
        });
    },
    createUser(userObj) {
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
    },
    partialUserUpdate(userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, user_data_access_1.findParticularUser)(userId);
            if (!user) {
                throw new handlers_exception_1.ResourceNotFound("User Not Found.");
            }
            if (data.password) {
                const password = data.password;
                const encryptedPassword = (0, encryption_util_1.encrypt)(password);
                data.password = encryptedPassword;
            }
            const updateValues = Object.assign(Object.assign({}, user), data);
            const isSuccess = (0, user_data_access_1.updateUser)(userId, updateValues);
            if (!isSuccess) {
                throw new handlers_exception_1.HttpError("Problem writing into the file.");
            }
            const entries = Object.entries(updateValues);
            const slicedValues = entries.slice(6);
            const newChanges = Object.fromEntries(slicedValues);
            return newChanges;
        });
    },
    fullUserUpdate(userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, user_data_access_1.findParticularUser)(userId);
            if (!user) {
                throw new handlers_exception_1.ResourceNotFound("User Not Found.");
            }
            const { password } = data;
            const encryptedPassword = (0, encryption_util_1.encrypt)(password);
            data.password = encryptedPassword;
            const isSuccess = (0, user_data_access_1.updateUser)(userId, data);
            if (!isSuccess) {
                throw new handlers_exception_1.HttpError("Problem writing into the file.");
            }
            return data;
        });
    },
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, user_data_access_1.findParticularUser)(userId);
            if (!user) {
                throw new handlers_exception_1.ResourceNotFound("User Not Found.");
            }
            const isSuccess = (0, user_data_access_1.removeUser)(userId);
            if (!isSuccess) {
                throw new handlers_exception_1.HttpError("Problem deleting the user.");
            }
            return user;
        });
    },
};
exports.default = userService;
//# sourceMappingURL=user.service.js.map