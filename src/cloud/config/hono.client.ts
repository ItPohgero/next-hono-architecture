import type { AppType } from "@/app/api/[...route]/route";
import { hc } from "hono/client";
import { ENV } from "./environtment";

const client = hc<AppType>(`http://localhost:${ENV.PORT}`);

export default client;
