import { Router } from "express";
import { TaskController } from "../controllers";
import { authMiddleware, ensureMiddleware } from "../middlewares";
import { taskCreateSchema, taskUpdateSchema } from "../schemas";

export const taskRouter = Router();

const taskController = new TaskController();

taskRouter.use(authMiddleware.validateToken);

taskRouter.post(
  "",
  ensureMiddleware.bodyIsValid(taskCreateSchema),
  ensureMiddleware.categoryIdBody,
  taskController.create
);
taskRouter.get("", taskController.read);

taskRouter.use(
  "/:taskId",
  ensureMiddleware.taskIdParams,
  authMiddleware.isTaskOwner
);

taskRouter.get("/:taskId", taskController.retrieve);
taskRouter.patch(
  "/:taskId",
  ensureMiddleware.bodyIsValid(taskUpdateSchema),
  ensureMiddleware.categoryIdBody,
  taskController.partialUpdate
);
taskRouter.delete("/:taskId", taskController.delete);
