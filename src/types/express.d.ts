import { Request } from "express";

declare module "express-serve-static-core" {
  interface Request {
    role?: string;
    userId?: string;
  }
}

export interface IModifiedRequest extends Request {
  role?: string;
  userId?: string;
}
