import { users } from "./schema";
import { createSelectSchema, createInsertSchema } from "drizzle-zod";

import { pgEnum } from "drizzle-orm/pg-core";

const authProvider = pgEnum("authProvider", ["github", "gitlab"]);
export const authProviderSelectSchema = createSelectSchema(authProvider);

export const userSelectSchema = createSelectSchema(users);

export const userInsertSchema = createInsertSchema(users);

export const userUpdateSchema = createInsertSchema(users);
