import { Router } from "express";
import { logIn, logOut, signUp } from "../controller/authentication.controller";

const authenticationRouter = Router();

authenticationRouter.post("/login", logIn);

authenticationRouter.post("/logout", logOut);

authenticationRouter.post("/signup", signUp);

export default authenticationRouter;
