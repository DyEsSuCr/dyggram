import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/settings'

export function ModalPostDetail ({ post, setPost }) {
  const { id, photo } = post
  const [hearts, setHearts] = useState(0)
  const [authHeart, setAuthHeart] = useState(null)

  const postHearts = async () => {
    const postsHearts = await (await fetch(`${BASE_URL}/posts/${post.id}/hearts`)).json()
    setHearts(postsHearts.length)
  }

  const validateHeart = async () => {
    const valHeart = await (await fetch(`${BASE_URL}/heart`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post: id })
    })).json()

    setAuthHeart(valHeart)
  }

  const toggleHeart = async () => {
    const res = await fetch(`${BASE_URL}/hearts`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post: id })
    })

    if (!res.ok) {
      await fetch(`${BASE_URL}/hearts`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post: id })
      })
    }

    setHearts()
  }

  useEffect(() => {
    postHearts()
    validateHeart()
  })

  return (
    <div className='absolute top-0 left-0 w-full h-screen flex justify-center items-center gap-10 bg-[#2f2f2f50]'>
      <img className='max-w-sm' src={`http://localhost:3000/images/${photo}`} />
      <p className='bg-slate-800 text-white' dangerouslySetInnerHTML={{ __html: post.plot }} />
      <button className='absolute top-8 right-8 text-4xl' onClick={() => setPost(null)}>
        X
      </button>
      <button onClick={toggleHeart}>
        {!authHeart ? '🤍' : '💛'} {hearts}
      </button>
    </div>
  )
}
