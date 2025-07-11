import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";

import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env.ts";
import { getRoomsRoute } from "./routes/get-rooms.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", () => {
  return { ok: true };
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`HTTP server running on http://localhost:${env.PORT}`);
  });

app.register(getRoomsRoute);
