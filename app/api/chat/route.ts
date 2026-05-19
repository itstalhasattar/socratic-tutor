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

        const userIp = req.headers.get("x-forwarded-for")?.split(",")[0].trim();
        if (!userIp) {
            return NextResponse.json(
                { success: false, error: "Unable to identify request source." },
                { status: 400 }
            );
        }
        const ipUsageKey = `ipUsage:${userIp}:${today}`;

        const data = await req.json()
        const parsedData = messageHistorySchema.safeParse(data)

        if (!parsedData.success) {
            return NextResponse.json({ success: false, error: parsedData.error.flatten() }, { status: 400 });

        }

        const InputTokenKey = `DailyInputToken:Global:${today}`;
        const OutputTokenKey = `DailyOutputToken:Global:${today}`;
        const usedDailyInputToken = Number(await redis.get(InputTokenKey)) || 0;
        const usedDailyOutputToken = Number(await redis.get(OutputTokenKey)) || 0;
        const DAILY_INPUT_TOKEN_LIMIT = Number(process.env.DAILY_INPUT_TOKEN_LIMIT);
        const DAILY_OUTPUT_TOKEN_LIMIT = Number(process.env.DAILY_OUTPUT_TOKEN_LIMIT);

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
                    error: "You've hit the daily usage cap. Check back tomorrow for more!",
                },
                { status: 429 }
            );
        }

        const DAILY_IP_REQUEST_LIMIT = Number(process.env.DAILY_IP_REQUEST_LIMIT);
        if (!Number.isNaN(DAILY_IP_REQUEST_LIMIT)) {
            const newIpCount = await redis.incr(ipUsageKey);
            if (newIpCount === 1) {
                await redis.expire(ipUsageKey, TOKEN_KEY_TTL_SECONDS);
            }
            if (newIpCount > DAILY_IP_REQUEST_LIMIT) {
                await redis.decr(ipUsageKey);
                return NextResponse.json(
                    { success: false, error: "You've reached your daily session limit. Check back tomorrow!" },
                    { status: 429 },
                );
            }
        }

        const { message, inputToken, outputToken } = await assistant(parsedData.data)

        await Promise.all([
            incrementDailyTokenUsage(InputTokenKey, inputToken),
            incrementDailyTokenUsage(OutputTokenKey, outputToken)


        ])
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

        return NextResponse.json({ success: false, error: "The tutor hit a snag. Give it a moment and try again." },
            { status: 500 })
    }
}
