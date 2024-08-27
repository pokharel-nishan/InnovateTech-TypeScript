import { createUserDto } from "../dto/createUser.dto";
import { fullUpdateDto } from "../dto/fullUpdate.dto";
import { partialUpdateDto } from "../dto/partialUpdate.dto";
import { ServerError } from "../exception/handlers.exception";
import User from "../models/user.model";

export async function getAllUsers() {
  try {
    const userData = await User.find();
    return userData;
  } catch (err) {
    throw new ServerError(err.message);
  }
}

export async function findParticularUser(userId: string) {
  try {
    const user = await User.findById({
      _id: userId,
    });
    return user;
  } catch (err) {
    throw new ServerError(err.message);
  }
}

export async function postUser(user: createUserDto) {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (err) {
    throw new ServerError(err.message);
  }
}

export async function updateUser(
  userId: string,
  updateValues: partialUpdateDto | fullUpdateDto,
) {
  try {
    await User.findByIdAndUpdate(userId, updateValues);
    return true;
  } catch (err) {
    throw new ServerError(err.message);
  }
}

export async function removeUser(userId: string) {
  try {
    const isSuccess = await User.deleteOne({ _id: userId });
    return isSuccess;
  } catch (err) {
    throw new ServerError(err.message);
  }
}
