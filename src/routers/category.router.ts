import { Router } from "express";
import { CategoryController } from "../controllers";
import { authMiddleware, ensureMiddleware } from "../middlewares";
import { categoryCreateSchema } from "../schemas";

export const categoryRouter = Router();

const categoryController = new CategoryController();

categoryRouter.use(authMiddleware.validateToken);

categoryRouter.post(
  "",
  ensureMiddleware.bodyIsValid(categoryCreateSchema),
  categoryController.create
);

categoryRouter.use(
  "/:categoryId",
  ensureMiddleware.categoryIdParams,
  authMiddleware.isCategoryOwner
);

categoryRouter.delete("/:categoryId", categoryController.delete);
