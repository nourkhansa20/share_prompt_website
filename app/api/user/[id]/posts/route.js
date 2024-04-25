import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt";
import User from "@models/user";

export async function GET(req, { params }) {
    try {
        await connectToDB()
        const auth0Id = params.id
        const user = await User.findOne({ auth0Id })
        const prompts = await Prompt.find({ creator: user._id }).populate('creator')
        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all prompts", {
            status: 500
        })
    }
}