import main_route from "@/server/delivery/routes/main.routes";
import users_route from "@/server/delivery/routes/users.routes";
import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono()
	.basePath("/api/v1")
	.route("/main", main_route)
	.route("/users", users_route);

export type AppType = typeof app;
export const GET = handle(app);
export const POST = handle(app);
