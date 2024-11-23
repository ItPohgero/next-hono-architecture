import { WithMain } from '@/cloud/delivery/controller/main.controller';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

const app = new Hono()
  .basePath('/api')
  .get("/hello", WithMain((controller) => controller.getHello()))
;

export type AppType = typeof app;
export const GET = handle(app);
export const POST = handle(app);
