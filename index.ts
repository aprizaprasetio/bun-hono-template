import { Hono } from "hono";
import { authRouter } from "~/router/auth.route";

const app = new Hono({
	strict: false,
});

const routers = [authRouter] as const;

routers.forEach((router) => {
	app.basePath("/api").route("/", router);
});

export default app;
