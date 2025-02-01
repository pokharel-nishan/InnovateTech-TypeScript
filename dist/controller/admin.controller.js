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
const admin_service_1 = __importDefault(require("../services/admin.service"));
const response_interface_1 = require("../interface/response.interface");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(response_interface_1.SuccessHttpStatusCode.GET).json(yield admin_service_1.default.getUsers());
    });
}
function getParticularUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res
            .status(response_interface_1.SuccessHttpStatusCode.GET)
            .json(yield admin_service_1.default.getParticularUser(req.params.id));
    });
}
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res
            .status(response_interface_1.SuccessHttpStatusCode.POST)
            .json(yield admin_service_1.default.createUser(req.body));
    });
}
function fullUserUpdate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res
            .status(response_interface_1.SuccessHttpStatusCode.PUT)
            .json(yield admin_service_1.default.fullUserUpdate(req.params.id, req.body));
    });
}
function partialUserUpdate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res
            .status(response_interface_1.SuccessHttpStatusCode.PATCH)
            .json(yield admin_service_1.default.partialUserUpdate(req.params.id, req.body));
    });
}
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res
            .status(response_interface_1.SuccessHttpStatusCode.DELETE)
            .json(yield admin_service_1.default.deleteUser(req.params.id));
    });
}
//# sourceMappingURL=admin.controller.js.map