import { reset, seed } from "drizzle-seed";
import { db, sql } from "./connection.ts";
import { schema } from "./schemas/index.ts";

await reset(db, schema);

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 20,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum({ sentencesCount: 6 }),
      },
    },
    questions: {
      count: 20,
      columns: {
        question: f.loremIpsum(),
        answer: f.loremIpsum({ sentencesCount: 3 }),
      },
    },
  };
});

await sql.end();

console.log("Database seeded");
