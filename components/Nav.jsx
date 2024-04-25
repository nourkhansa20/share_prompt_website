"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useUser } from '@auth0/nextjs-auth0/client';

const Nav = () => {
    const { user, error, isLoading } = useUser();
    const [toggleDropDown, setToggleDropDown] = useState(false)

    useEffect(() => {
        if (!isLoading && user) {
            // Call the API route to add the user to the database
            fetch('/api/user', {
                method: 'POST',  // Specify that you are making a POST request
                headers: {
                    'Content-Type': 'application/json',  // Set the content type to JSON
                },
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data.message);
                })
                .catch(error => {
                    console.error('Error adding user:', error);
                });

        }

    }, [user, isLoading]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;


    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image src={'/assets/images/logo.svg'} alt="Promptopia Logo" width={30} height={30} className="object-contain" />
                <p className="logo_text">Promptopia</p>
            </Link>

            {/* Desktop Navigation  */}
            <div className="sm:flex hidden">
                {user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href={'/create-prompt'} className="black_btn">
                            Create Post
                        </Link>
                        <a href="/api/auth/logout" className="outline_btn">
                            Log Out
                        </a>

                        <Link href='/profile'>
                            <img
                                src={user.picture}
                                className="rounded-full size-[37px]"
                                alt="profile"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        <a href="/api/auth/login" className="black_btn">
                            Sign In
                        </a>
                    </>
                )}
            </div>

            {/* Mobile Navigation  */}
            <div className="sm:hidden flex relative">
                {user ? (
                    <div className="flex">
                        <img
                            src={user.picture}
                            className="rounded-full size-[37px]"
                            alt="profile"
                            onClick={() => setToggleDropDown((prev) => !prev)}
                        />

                        {toggleDropDown && (
                            <div className="dropdown">
                                <Link
                                    href={'/profile'}
                                    className="dropdown_link"
                                    onClick={() => setToggleDropDown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href={'/profile'}
                                    className="create_prompt"
                                    onClick={() => setToggleDropDown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <a href="/api/auth/logout" className="mt-5 w-full black_btn">
                                    Sign Out
                                </a>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <button type="button"
                            className="black_btn"
                        >
                            Sign In
                        </button>
                    </>
                )
                }
            </div>

        </nav >
    )
}

export default Nav