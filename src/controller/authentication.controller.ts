import { Request, Response } from "express";
import { login } from "../authentication/login.authentication";

export async function logIn(req: Request, res: Response) {
  const credentials = req.body;
  return res.status(200).json({ Token: await login(credentials) });
}

export function signUp(req: Request, res: Response) {}

export function logOut(req: Request, res: Response) {}
