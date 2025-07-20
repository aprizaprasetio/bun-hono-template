import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: "./src/schemas/*",
	out: "./migration",
	migrations: {
		schema: "public",
	},
	dbCredentials: {
		url: process.env.DATABASE_URL,
	},
});
