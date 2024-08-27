"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserModel = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user", "guest"],
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("user", UserModel);
//# sourceMappingURL=user.model.js.map