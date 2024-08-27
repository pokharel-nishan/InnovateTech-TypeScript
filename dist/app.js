"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_database_1 = require("./database/mongoose.database");
const handlers_exception_1 = require("./exception/handlers.exception");
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(PORT, () => {
    try {
        (0, mongoose_database_1.mongoDBConnection)();
        console.log("Database Connection Established.");
    }
    catch (_a) {
        throw new handlers_exception_1.ServerError("Problem Connecting to database.");
    }
    return console.log(`Express is listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map