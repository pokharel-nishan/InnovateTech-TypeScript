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
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const auth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        console.log("Header not found");
        return res.status(401).json({
            message: "Token is not provided. Please enter token in the header.",
        });
    }
    const token = authorization.split(" ")[1];
    const SECRET_KEY = process.env.SECRET_KEY;
    let verifiedData;
    try {
        verifiedData = jwt.verify(token, SECRET_KEY);
    }
    catch (err) {
        console.log("Error: ", err.message);
        return res
            .status(401)
            .json({ Message: "Invalid Token. Please enter valid token. " });
    }
    const role = verifiedData.role;
    const userId = verifiedData.userId;
    console.log(role);
    req.role = role;
    req.userId = userId;
    next();
};
exports.auth = auth;
//# sourceMappingURL=authentication.middleware.js.map