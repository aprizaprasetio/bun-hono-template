import { Hono } from "hono";

const app = new Hono({
	strict: false,
});

app.get("/", (c) => {
	return c.text("Hello via Bun!", 400);
});

export default app;
