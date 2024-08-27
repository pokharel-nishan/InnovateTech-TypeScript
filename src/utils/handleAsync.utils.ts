import { Request, Response, NextFunction } from "express";

type AsyncRouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<any>;

export function handleAsync(requestHandler: AsyncRouteHandler) {
  return async function asyncWrapper(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      await requestHandler(req, res, next);
    } catch (err) {
      next(err); // Pass the error to the next middleware
    }
  };
}
