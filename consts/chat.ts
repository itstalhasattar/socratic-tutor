import { z } from "zod";

export const messageSchema = z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string().trim().min(1, "Message cannot be empty").max(3000, "Message too long")

})

export const messageHistorySchema = z.array(messageSchema).min(1, "At least one message required").max(40, "Conversation too Long")

export type TMessage = z.infer<typeof messageSchema>;
export type TMessagesHistory = z.infer<typeof messageHistorySchema>;