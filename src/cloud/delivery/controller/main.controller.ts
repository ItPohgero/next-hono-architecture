import type { Context } from "hono";

class MainController {
	constructor(private readonly ctx: Context) {}

	getHello() {
		// Mengembalikan JSON response secara eksplisit bertipe Promise<Response>
		return this.ctx.json({ message: "Hello Next.js!" });
	}
}

type ControllerMethod = (
	controller: MainController,
) => Response | Promise<Response>;

function WithMain(handler: ControllerMethod) {
	return (ctx: Context): Response | Promise<Response> => {
		const controller = new MainController(ctx);
		return handler(controller);
	};
}

export { WithMain, MainController };
