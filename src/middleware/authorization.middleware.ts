import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../exception/handlers.exception";

function authorize(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.role;
    if (allowedRoles.includes(userRole)) {
      console.log(userRole, " : ", allowedRoles);
      return next();
    }
    throw new UnauthorizedException("Unauthorized Resource.");
  };
}

module.exports = authorize;
