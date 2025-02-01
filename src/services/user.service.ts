import {
  findParticularUser,
  getAllUsers,
  postUser,
  removeUser,
  updateUser,
} from "../data-access/user.data-access";
import { createUserDto } from "../dto/createUser.dto";
import { fullUpdateDto } from "../dto/fullUpdate.dto";
import { partialUpdateDto } from "../dto/partialUpdate.dto";
import {
  BadRequest,
  HttpError,
  ResourceNotFound,
} from "../exception/handlers.exception";
import { encrypt } from "../utils/encryption.util";
const { v4: uuid } = require("uuid");

const userService = {
  async getParticularUser(userId: string) {
    const user = await findParticularUser(userId);
    if (user) {
      return user;
    }
    throw new ResourceNotFound("User Not Found.");
  },

  async createUser(userObj: createUserDto) {
    const { password } = userObj;
    const encryptedPassword = encrypt(password);
    userObj.password = encryptedPassword;
    const isSuccess = postUser(userObj);
    if (!isSuccess) {
      throw new HttpError("Problem creating the user.");
    }
    return isSuccess;
  },

  async partialUserUpdate(userId: string, data: partialUpdateDto) {
    const user = await findParticularUser(userId);
    if (!user) {
      throw new ResourceNotFound("User Not Found.");
    }
    if (data.password) {
      const password = data.password;
      const encryptedPassword = encrypt(password);
      data.password = encryptedPassword;
    }
    const updateValues = { ...user, ...data };
    const isSuccess = updateUser(userId, updateValues);
    if (!isSuccess) {
      throw new HttpError("Problem writing into the file.");
    }

    const entries = Object.entries(updateValues);

    const slicedValues = entries.slice(6);

    const newChanges = Object.fromEntries(slicedValues);

    return newChanges;
  },

  async fullUserUpdate(userId: string, data: fullUpdateDto) {
    const user = await findParticularUser(userId);
    if (!user) {
      throw new ResourceNotFound("User Not Found.");
    }
    const { password } = data;
    const encryptedPassword = encrypt(password);

    data.password = encryptedPassword;
    const isSuccess = updateUser(userId, data);

    if (!isSuccess) {
      throw new HttpError("Problem writing into the file.");
    }
    return data;
  },

  async deleteUser(userId: string) {
    const user = await findParticularUser(userId);
    if (!user) {
      throw new ResourceNotFound("User Not Found.");
    }
    const isSuccess = removeUser(userId);
    if (!isSuccess) {
      throw new HttpError("Problem deleting the user.");
    }
    return user;
  },
};
export default userService;
