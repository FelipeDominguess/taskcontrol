import { Router } from "express";
import { UserController } from "../controllers";
import { authMiddleware, ensureMiddleware } from "../middlewares";
import { sessionCreateSchema, userCreateSchema } from "../schemas";

export const userRouter = Router();

const userController = new UserController();

userRouter.post(
  "",
  ensureMiddleware.bodyIsValid(userCreateSchema),
  ensureMiddleware.emailIsUnique,
  userController.create
);

userRouter.post(
  "/login",
  ensureMiddleware.bodyIsValid(sessionCreateSchema),
  userController.login
);

userRouter.get(
  "/profile",
  authMiddleware.validateToken,
  userController.profile
);
