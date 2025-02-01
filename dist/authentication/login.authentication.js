"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.login = login;
const jwt = __importStar(require("jsonwebtoken"));
const handlers_exception_1 = require("../exception/handlers.exception");
const user_model_1 = __importDefault(require("../models/user.model"));
const encryption_util_1 = require("../utils/encryption.util");
function login(credentials) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, password } = credentials;
        console.log(username, password);
        const user = yield user_model_1.default.findOne({
            username,
        });
        if (!user) {
            throw new handlers_exception_1.ResourceNotFound("User does not exist.");
        }
        const isValidPassword = (0, encryption_util_1.compare)(password, user.password);
        if (!isValidPassword) {
            throw new handlers_exception_1.BadRequest("Username and Password do not match.");
        }
        const payload = {
            userId: user._id,
            role: user.role,
        };
        const SECRET_KEY = process.env.SECRET_KEY;
        const token = jwt.sign(payload, SECRET_KEY);
        return token;
    });
}
//# sourceMappingURL=login.authentication.js.map