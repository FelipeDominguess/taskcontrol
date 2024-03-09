import { z } from "zod";
import { categoryCreateSchema } from "../schemas";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;

export { CategoryCreate };
