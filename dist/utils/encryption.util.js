"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = encrypt;
exports.compare = compare;
const bcrypt = require("bcrypt");
function encrypt(data) {
    const saltRounds = 12;
    const encryptedData = bcrypt.hashSync(data, saltRounds);
    return encryptedData;
}
function compare(data, encryptedData) {
    const isVerified = bcrypt.compareSync(data, encryptedData);
    return isVerified;
}
//# sourceMappingURL=encryption.util.js.map