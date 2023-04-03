import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/settings'

export function ModalPostDetail ({ post, setPost }) {
  const { id, photo } = post
  const [hearts, setHearts] = useState(0)

  const postHearts = async () => {
    const postsHearts = await (await fetch(`${BASE_URL}/posts/${post.id}/hearts`)).json()
    setHearts(postsHearts.length)
  }

  const addHeart = async () => {
    await fetch(`${BASE_URL}/hearts`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post: id })
    })

    setHearts()
  }

  useEffect(() => {
    postHearts()
  })

  return (
    <div className='absolute top-0 left-0 w-full h-screen flex justify-center items-center gap-10 bg-[#2f2f2f50]'>
      <img className='max-w-sm' src={`http://localhost:3000/images/${photo}`} />
      <p className='bg-slate-800 text-white' dangerouslySetInnerHTML={{ __html: post.plot }} />
      <button className='absolute top-8 right-8 text-4xl' onClick={() => setPost(null)}>
        X
      </button>
      <button onClick={addHeart}>
        🤍 {hearts}
      </button>
    </div>
  )
}
