"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import Form from '@components/Form';

const CreatePrompt = () => {

    const router = useRouter()
        
    const { user, error, isLoading } = useUser();
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    const createPrompt = async (e) => {
        e.preventDefault() //prevent default the reload that from submition
        setSubmitting(true)
        try {
            const response = await fetch('/api/prompt/new', {
                method: "POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    auth0Id: user?.sub,
                    tag: post.tag
                })
            })

            if (response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}

        />
    )
}

export default CreatePrompt