import { Hono } from "hono";
import { handle } from "hono/vercel";
import users_route from "@/cloud/delivery/routes/users.routes";
import main_route from "@/cloud/delivery/routes/main.routes";

const app = new Hono()
	.basePath("/api/v1")
	.route("/main", main_route)
	.route("/users", users_route)

export type AppType = typeof app;
export const GET = handle(app);
export const POST = handle(app);
