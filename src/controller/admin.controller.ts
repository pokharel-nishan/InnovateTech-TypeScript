import { Response } from "express";
import { IModifiedRequest as Request } from "../types/express";
import adminService from "../services/admin.service";
import { SuccessHttpStatusCode } from "../interface/response.interface";

export async function getUsers(req: Request, res: Response) {
  res.status(SuccessHttpStatusCode.GET).json(await adminService.getUsers());
}

export async function getParticularUser(req: Request, res: Response) {
  res
    .status(SuccessHttpStatusCode.GET)
    .json(await adminService.getParticularUser(req.params.id));
}

export async function createUser(req: Request, res: Response) {
  res
    .status(SuccessHttpStatusCode.POST)
    .json(await adminService.createUser(req.body));
}

export async function fullUserUpdate(req: Request, res: Response) {
  res
    .status(SuccessHttpStatusCode.PUT)
    .json(await adminService.fullUserUpdate(req.params.id, req.body));
}

export async function partialUserUpdate(req: Request, res: Response) {
  res
    .status(SuccessHttpStatusCode.PATCH)
    .json(await adminService.partialUserUpdate(req.params.id, req.body));
}

export async function deleteUser(req: Request, res: Response) {
  res
    .status(SuccessHttpStatusCode.DELETE)
    .json(await adminService.deleteUser(req.params.id));
}
