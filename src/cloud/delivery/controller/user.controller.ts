import { UserUseCase } from "@/cloud/usecase/user.usecase";
import type { Context } from "hono";
import { UserCreateRequest } from "../dto/user.dto";

class UserController {
	constructor(private readonly ctx: Context, private readonly usecase: UserUseCase) {}

	async listUsers() {
		const users = await this.usecase.getUsers();
		return this.ctx.json(users);
	}

	async createUser() {
		const body = await this.ctx.req.json<UserCreateRequest>();
		const user = await this.usecase.createUser(body);
		return this.ctx.json(user, 201);
	}
}

type ControllerMethod = (
	controller: UserController,
) => Response | Promise<Response>;

interface WithUserDeps {
	usecase: UserUseCase;
}

function WithUser(handler: ControllerMethod, deps: WithUserDeps) {
	return (ctx: Context): Response | Promise<Response> => {
		const controller = new UserController(ctx, deps.usecase);
		return handler(controller);
	};
}

export { WithUser, UserController };
