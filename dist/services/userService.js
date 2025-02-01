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
Object.defineProperty(exports, "__esModule", { value: true });
const userService = {
  getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
      return "These are users.";
    });
  },
  getParticularUser() {
    return __awaiter(this, void 0, void 0, function* () {
      return "Get particular user";
    });
  },
  createUser() {
    return __awaiter(this, void 0, void 0, function* () {
      return "Create user.";
    });
  },
  partialUserUpdate() {
    return __awaiter(this, void 0, void 0, function* () {
      return "Partial Update User";
    });
  },
  fullUserUpdate() {
    return __awaiter(this, void 0, void 0, function* () {
      return "Full update user.";
    });
  },
  deleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
      return "Delete user.";
    });
  },
};
exports.default = userService;
//# sourceMappingURL=userService.js.map
