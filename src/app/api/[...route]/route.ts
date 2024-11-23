import { Hono } from "hono";
import { handle } from "hono/vercel";
import { UserModel } from "@/cloud/model/user.model";
import { WithUser } from "@/cloud/delivery/controller/user.controller";
import { UserUseCase } from "@/cloud/usecase/user.usecase";
import { WithMain } from "@/cloud/delivery/controller/main.controller";

const userRepository = new UserModel();
const userUseCase = new UserUseCase(userRepository);

const app = new Hono()
	.basePath("/api/v1")
	.get("/hello", WithMain((controller) => controller.getHello()))
	.get(
		"/users",
		WithUser((controller) => controller.listUsers(), { usecase: userUseCase })
	)
	.post(
		"/users",
		WithUser((controller) => controller.createUser(), { usecase: userUseCase })
	);

export type AppType = typeof app;
export const GET = handle(app);
export const POST = handle(app);
