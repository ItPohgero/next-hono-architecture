import { UserUseCase } from "@/server/domain/usecase/user.usecase";
import { UserModel } from "@/server/infrastructure/model/user.model";
import { Hono } from "hono";
import { WithUser } from "../controller/user.controller";

const userRepository = new UserModel();
const userUseCase = new UserUseCase(userRepository);
const users_route = new Hono()
	.get(
		"/users",
		WithUser((controller) => controller.listUsers(), { usecase: userUseCase }),
	)
	.post(
		"/users",
		WithUser((controller) => controller.createUser(), { usecase: userUseCase }),
	);
export default users_route;
