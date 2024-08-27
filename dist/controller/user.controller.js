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
exports.getUsers = getUsers;
exports.getParticularUser = getParticularUser;
exports.createUser = createUser;
exports.fullUserUpdate = fullUserUpdate;
exports.partialUserUpdate = partialUserUpdate;
exports.deleteUser = deleteUser;
const user_service_1 = __importDefault(require("../services/user.service"));
const response_interface_1 = require("../interface/response.interface");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(response_interface_1.ESuccessHttpStatusCode.GET).json(yield user_service_1.default.getUsers());
    });
}
function getParticularUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res
            .status(response_interface_1.ESuccessHttpStatusCode.GET)
            .json(yield user_service_1.default.getParticularUser(req.userId));
    });
}
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res
            .status(response_interface_1.ESuccessHttpStatusCode.POST)
            .json(yield user_service_1.default.createUser(req.body));
    });
}
function fullUserUpdate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.userId;
        res
            .status(response_interface_1.ESuccessHttpStatusCode.PUT)
            .json(yield user_service_1.default.fullUserUpdate(req.userId, req.body));
    });
}
function partialUserUpdate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res
            .status(response_interface_1.ESuccessHttpStatusCode.PATCH)
            .json(yield user_service_1.default.partialUserUpdate(req.userId, req.body));
    });
}
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res
            .status(response_interface_1.ESuccessHttpStatusCode.DELETE)
            .json(yield user_service_1.default.deleteUser(req.userId));
    });
}
//# sourceMappingURL=user.controller.js.map