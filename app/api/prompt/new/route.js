import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt";
import User from "@models/user";

export async function POST(req) {
    const { auth0Id, prompt, tag } = await req.json()
    try {
        await connectToDB();
        const user = await User.findOne({ auth0Id })
        const newPrompt = new Prompt({ creator: user._id, tag, prompt })
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Faild to create new prompt", { status: 500 })
    }
}

