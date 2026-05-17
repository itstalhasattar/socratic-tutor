import { messageHistorySchema, } from "@/consts/chat"
import { NextResponse } from "next/server";
import { assistant } from "@/utils/model";
import { redis } from "@/utils/redis";

const TOKEN_KEY_TTL_SECONDS = 2 * 24 * 60 * 60;

async function incrementDailyTokenUsage(key: string, amount: number) {
    const total = await redis.incrby(key, amount);

    if (total === amount) {
        await redis.expire(key, TOKEN_KEY_TTL_SECONDS);
    }
}



export async function POST(req: Request) {
    try {
        const today = new Date().toISOString().slice(0, 10);
        const InputTokenKey = `DailyInputToken:Global:${today}`;
        const OutputTokenKey = `DailyOutputToken:Global:${today}`;
        const usedDailyInputToken = Number((await redis.get(InputTokenKey) ?? 0));
        const usedDailyOutputToken = Number((await redis.get(OutputTokenKey) ?? 0))
        const DAILY_INPUT_TOKEN_LIMIT = Number(process.env.DAILY_INPUT_TOKEN_LIMIT);
        const DAILY_OUTPUT_TOKEN_LIMIT = Number(process.env.DAILY_OUTPUT_TOKEN_LIMIT);



        const data = await req.json()
        const parsedData = messageHistorySchema.safeParse(data)

        if (!parsedData.success) {
            return NextResponse.json({ success: false, error: parsedData.error.flatten() }, { status: 400 });

        }
        if (
            Number.isNaN(DAILY_INPUT_TOKEN_LIMIT) ||
            Number.isNaN(DAILY_OUTPUT_TOKEN_LIMIT)
        ) {
            throw new Error("Daily token limits are not valid numbers");
        }

        if ((usedDailyInputToken >= DAILY_INPUT_TOKEN_LIMIT) || (usedDailyOutputToken >= DAILY_OUTPUT_TOKEN_LIMIT)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Daily token limit has been used. Please try again tomorrow.",
                },
                { status: 429 }
            );
        }
        const { message, inputToken, outputToken } = await assistant(parsedData.data)
        console.log({ message, inputToken, outputToken })

        await incrementDailyTokenUsage(InputTokenKey, inputToken);
        await incrementDailyTokenUsage(OutputTokenKey, outputToken);


        return NextResponse.json(
            {
                success: true,
                message: message
            },
            { status: 200 }
        );
    }
    catch (error) {
        console.error("External service error:", error);

        return NextResponse.json({ success: false, error: "Something went wrong. Please try again." },
            { status: 500 })
    }
}
