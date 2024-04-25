"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import Form from '@components/Form';

const EditPrompt = () => {

    const router = useRouter()

    const searchParams = useSearchParams()
    const promptId = searchParams.get('id')
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    useEffect(() => {
        const getPrompDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`)
            const data = await response.json()
            console.log(data)
            setPost({
                prompt: data.prompt,
                tag: data.tag
            })
        }
        if (promptId) getPrompDetails()
    }, [promptId])

    const updatePrompt = async (e) => {
        e.preventDefault() //prevent default the reload that from submition
        setSubmitting(true)
        if (!promptId) return alert('Prompt ID not found')
        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    prompt: post.prompt,
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
        <Suspense fallback={<div>Loading...</div>}>
            <Form
                type="Edit"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={updatePrompt}

            />
        </Suspense>
    )
}

export default EditPrompt