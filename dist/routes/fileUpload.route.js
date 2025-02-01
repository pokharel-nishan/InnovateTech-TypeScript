"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const file_upload_util_1 = __importDefault(require("../utils/file-upload.util"));
const fileUploadRouter = (0, express_1.Router)();
fileUploadRouter.post('/', file_upload_util_1.default.single('file'), (req, res) => {
    res.json({ message: "File uploaded successfully." });
});
exports.default = fileUploadRouter;
//# sourceMappingURL=fileUpload.route.js.map