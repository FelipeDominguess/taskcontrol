import express, { json } from "express";
import "express-async-errors";
import helmet from "helmet";
import "reflect-metadata";
import { handleErros } from "./middlewares";
import { categoryRouter, taskRouter, userRouter } from "./routers";

export const app = express();

app.use(helmet());
app.use(json());

app.use("/users", userRouter);
app.use("/tasks", taskRouter);
app.use("/categories", categoryRouter);

app.use(handleErros);
