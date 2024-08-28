import { Request, Response } from "express";
import { login } from "../authentication/login.authentication";
import { createUserDto } from "../dto/createUser.dto";
import { SuccessHttpStatusCode } from "../interface/response.interface";
import { signup } from "../authentication/signup.authentication";

export async function logIn(req: Request, res: Response) {
  const credentials = req.body;
  return res
    .status(SuccessHttpStatusCode.POST)
    .json({ Token: await login(credentials) });
}

export async function signUp(req: Request, res: Response) {
  const user: createUserDto = req.body;
  return res.status(SuccessHttpStatusCode.POST).json(await signup(user));
}

export function logOut(req: Request, res: Response) {}
