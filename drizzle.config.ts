import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/server/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  out: "./drizzle",
  breakpoints: true,
  strict: true,
  verbose: true,
});
