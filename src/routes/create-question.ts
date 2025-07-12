import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import z from "zod/v4";
import { db } from "../db/connection.ts";
import { schema } from "../db/schemas/index.ts";

export const createQuestionRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    "/rooms/:roomId/questions",
    {
      schema: {
        params: z.object({ roomId: z.string() }),
        body: z.object({
          question: z.string(),
          answer: z.string().optional(),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;
      const { question, answer } = request.body;

      const result = await db
        .insert(schema.questions)
        .values({
          roomId,
          question,
          answer,
        })
        .returning();

      const insertedQuestion = result[0];

      if (!insertedQuestion) {
        throw new Error("Failed to create room");
      }

      return reply.status(201).send({ id: insertedQuestion.id });
    }
  );
};
