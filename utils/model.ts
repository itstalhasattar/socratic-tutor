import "server-only"
import Anthropic from "@anthropic-ai/sdk";
import { TMessagesHistory } from "@/consts/chat";
import { SYSTEM_PROMPT } from "@/consts/prompt";


if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error("ANTHROPIC_API_KEY is not defined");
}


const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});


export async function assistant(messages: TMessagesHistory) {
  const reply = await anthropic.messages.create({
    max_tokens: 1024,
    system:SYSTEM_PROMPT,
    messages,
    model:"claude-haiku-4-5"
  })
  const message = reply.content.find((element) => element.type === "text")?.text ?? "";
  const inputToken = reply.usage.input_tokens
  const outputToken = reply.usage.output_tokens

  return (
    {
      message,
      inputToken,
      outputToken

    })

}