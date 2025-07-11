import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { db } from "../db/connection.ts";
import { schema } from "../db/schemas/index.ts";
export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.get("/rooms", async () => {
    const results = await db
      .select()
      .from(schema.rooms)
      .orderBy(schema.rooms.created_at);

    return results;
  });
};
