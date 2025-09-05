import { users } from "./schema";
import { createSelectSchema, createInsertSchema } from "drizzle-zod";

export const userSelectSchema = createSelectSchema(users);

export const userInsertSchema = createInsertSchema(users);

export const userUpdateSchema = createInsertSchema(users);
