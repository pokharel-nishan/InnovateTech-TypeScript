import { Response } from "express";
import { IModifiedRequest as Request } from "../types/express";
import userService from "../services/user.service";
import { ESuccessHttpStatusCode } from "../interface/response.interface";

export async function getUsers(req: Request, res: Response) {
  res.status(ESuccessHttpStatusCode.GET).json(await userService.getUsers());
}

export async function getParticularUser(req: Request, res: Response) {
  res
    .status(ESuccessHttpStatusCode.GET)
    .json(await userService.getParticularUser(req.userId));
}

export async function createUser(req: Request, res: Response) {
  res
    .status(ESuccessHttpStatusCode.POST)
    .json(await userService.createUser(req.body));
}

export async function fullUserUpdate(req: Request, res: Response) {
  const userId = req.userId;
  res
    .status(ESuccessHttpStatusCode.PUT)
    .json(await userService.fullUserUpdate(req.userId, req.body));
}

export async function partialUserUpdate(req: Request, res: Response) {
  res
    .status(ESuccessHttpStatusCode.PATCH)
    .json(await userService.partialUserUpdate(req.userId, req.body));
}

export async function deleteUser(req: Request, res: Response) {
  res
    .status(ESuccessHttpStatusCode.DELETE)
    .json(await userService.deleteUser(req.userId));
}
