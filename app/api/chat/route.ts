import { messageHistorySchema, } from "@/consts/chat"
import { NextResponse } from "next/server";
import { assistant } from "@/utils/model";


export async function POST(req: Request) {
    try {
        const data = await req.json()
        const parsedData = messageHistorySchema.safeParse(data)

        if (!parsedData.success) {
            return NextResponse.json({ success: false, error: parsedData.error.flatten() }, { status: 400 });

        }
        const { message, inputToken, outputToken } = await assistant(parsedData.data)
        console.log({ message, inputToken, outputToken })

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
            { status: 400 })
    }
}