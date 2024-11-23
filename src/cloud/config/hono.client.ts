import type { AppType } from "@/app/api/[...route]/route";
import { ENV_CLOUD } from "@/env/cloud";
import { hc } from "hono/client";

const client = hc<AppType>(`http://localhost:${ENV_CLOUD.PORT}`);

export default client;
