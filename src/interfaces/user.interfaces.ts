import { z } from "zod";
import {
  sessionCreateSchema,
  userCreateSchema,
  userReturnSchema,
} from "../schemas";

type UserCreate = z.infer<typeof userCreateSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;

type SessionCreate = z.infer<typeof sessionCreateSchema>;
type SessionReturn = {
  accessToken: string;
  user: UserReturn;
};

export { SessionCreate, SessionReturn, UserCreate, UserReturn };
