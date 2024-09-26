import { vacationSchemaObject } from "@/lib/schema";
import { friendli } from "@friendliai/ai-provider";
import { streamObject } from "ai";

export async function POST() {
  const result = await streamObject({
    schema: vacationSchemaObject,
    output: "object",
    model: friendli("meta-llama-3.1-8b-instruct"),
    prompt: "Generate 3 vacation destinations",
  });

  return result.toTextStreamResponse();
}
