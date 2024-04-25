import { connectToDB } from '@utils/database';
import User from '@models/user';
import { getSession } from '@auth0/nextjs-auth0';

export async function POST(request) {
    try {
        // Get the user session
        const { user } = await getSession(request);
        if (!user) {
            return new Response(
                JSON.stringify({ error: 'No authenticated user found' }),
                { status: 401 }
            );
        }

        // Connect to the database
        await connectToDB();

        // Check if the user already exists in the database
        const existingUser = await User.findOne({ auth0Id: user.sub });

        if (!existingUser) {
            // Create a new user
            const newUser = new User({
                auth0Id: user.sub,
                email: user.email,
                username: user.nickname,
                image: user.picture,
            });

            // Save the new user to the database
            const savedUser = await newUser.save();

            // Return success response with saved user data
            return new Response(
                JSON.stringify({ message: 'User added to the database', user: savedUser }),
                { status: 201, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // If the user already exists, return a response indicating this
        return new Response(
            JSON.stringify({ message: 'User already exists in the database' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        // Handle any errors during the request
        console.error('An error occurred:', error);
        return new Response(
            JSON.stringify({ error: 'An error occurred while adding the user to the database' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
