import * as jwt from "jsonwebtoken";
import { ResourceNotFound, BadRequest } from "../exception/handlers.exception";
import User from "../models/user.model";
import { loginDto } from "../dto/login.dto";
import { compare } from "../utils/encryption.util";

export async function login(credentials: loginDto) {
  const { username, password } = credentials;

  console.log(username, password);
  const user = await User.findOne({
    username,
  });

  if (!user) {
    throw new ResourceNotFound("User does not exist.");
  }

  const isValidPassword = compare(password, user.password);
  if (!isValidPassword) {
    throw new BadRequest("Username and Password do not match.");
  }

  const payload = {
    userId: user._id,
    role: user.role,
  };

  const SECRET_KEY = process.env.SECRET_KEY;
  const token = jwt.sign(payload, SECRET_KEY);

  return token;
}
