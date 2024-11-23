import { Hono } from "hono";
import { WithMain } from "../controller/main.controller";

const main_route = new Hono().get(
	"/hello",
	WithMain((controller) => controller.getHello()),
);
export default main_route;
