import React from 'react'

const SignInButton = ({ className }) => {

    const saveUser = async () => {
        if (!isLoading && user) {
            // Connect to the database
            console.log(db)

            // Check if the user already exists in the database
            console.log(first)
            const existingUser = await User.findOne({ auth0Id: user.sub });

            if (!existingUser) {
                // Create a new user
                const newUser = new User({
                    auth0Id: user.sub,
                    email: user.email,
                    name: user.name,
                    image: user.picture
                });

                // Save the new user to the database
                await newUser.save();
            }
        }
    }

    return (
        <a href="/api/auth/login" className={className}>
            Sign In
        </a>
    )

}

export default SignInButton