import { streamObject } from "ai";
import { vacationSchema } from "@/lib/schema";
import { friendli } from "@friendliai/ai-provider";

export async function POST() {
  const result = await streamObject({
    schema: vacationSchema,
    output: "array",
    model: friendli("meta-llama-3.1-8b-instruct"),
    prompt: "Generate 3 vacation destinations",
  });

  return result.toTextStreamResponse();
}
