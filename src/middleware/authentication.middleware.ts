import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { IModifiedRequest } from "../types/express";

export const auth = (
  req: IModifiedRequest,
  res: Response,
  next: NextFunction,
) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    console.log("Header not found");
    return res.status(401).json({
      message: "Token is not provided. Please enter token in the header.",
    });
  }

  const token = authorization.split(" ")[1];
  const SECRET_KEY = process.env.SECRET_KEY;

  let verifiedData: any;
  try {
    verifiedData = jwt.verify(token, SECRET_KEY);
  } catch (err) {
    console.log("Error: ", err.message);
    return res
      .status(401)
      .json({ Message: "Invalid Token. Please enter valid token. " });
  }

  const role: string = verifiedData.role;
  const userId: string = verifiedData.userId;
  req.role = role;
  req.userId = userId;
  next();
};
