import { NextFunction, Request, Response } from "express";
import { ProgramError } from "../exception/handlers.exception";

export function globalExceptionHandler(
  err: ProgramError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { status = 500, message = "Unexpected Error occurred." } = err;
  return res.status(status).json({ Message: message });
}
