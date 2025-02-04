"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
const userService_1 = __importDefault(require("../services/userService"));
const responseInterface_1 = require("../interface/responseInterface");
function getUsers(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const users = yield userService_1.default.getUsers();
      res.status(responseInterface_1.ESuccessHttpStatusCode.GET).json(users);
    } catch (err) {
      console.log(err);
    }
  });
}
function getParticularUser(req, res) {
  return __awaiter(this, void 0, void 0, function* () {});
}
function createUser(req, res) {
  return __awaiter(this, void 0, void 0, function* () {});
}
exports.default = { getUsers, getParticularUser };
//# sourceMappingURL=userController.js.map
