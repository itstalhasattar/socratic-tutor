import { z } from "zod";

export const messageSchema = z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string().trim().min(1, "Your message can't be empty").max(3000, "Message is over the 3,000 character limit")

})

export const messageHistorySchema = z.array(messageSchema).min(1, "The conversation has no messages to send").max(40, "You've reached the session message limit")

export type TMessage = z.infer<typeof messageSchema>;
export type TMessagesHistory = z.infer<typeof messageHistorySchema>;