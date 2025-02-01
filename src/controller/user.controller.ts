import { Response } from "express";
import { IModifiedRequest as Request } from "../types/express";
import userService from "../services/user.service";
import { SuccessHttpStatusCode } from "../interface/response.interface";

export async function getParticularUser(req: Request, res: Response) {
  res
    .status(SuccessHttpStatusCode.GET)
    .json(await userService.getParticularUser(req.userId));
}

export async function fullUserUpdate(req: Request, res: Response) {
  const userId = req.userId;
  res
    .status(SuccessHttpStatusCode.PUT)
    .json(await userService.fullUserUpdate(req.userId, req.body));
}

export async function partialUserUpdate(req: Request, res: Response) {
  res
    .status(SuccessHttpStatusCode.PATCH)
    .json(await userService.partialUserUpdate(req.userId, req.body));
}

export async function deleteUser(req: Request, res: Response) {
  res
    .status(SuccessHttpStatusCode.DELETE)
    .json(await userService.deleteUser(req.userId));
}
