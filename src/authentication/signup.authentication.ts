import { postUser } from "../data-access/user.data-access";
import { createUserDto } from "../dto/createUser.dto";
import { HttpError } from "../exception/handlers.exception";
import { encrypt } from "../utils/encryption.util";

export async function signup(userObj: createUserDto) {
  const { password } = userObj;
  const encryptedPassword = encrypt(password);
  userObj.password = encryptedPassword;
  const isSuccess = postUser(userObj);
  if (!isSuccess) {
    throw new HttpError("Problem creating the user.");
  }
  return isSuccess;
}
