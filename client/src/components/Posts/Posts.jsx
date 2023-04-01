import { useState } from 'react'
import { ModalPostDetail } from '../../portals/ModalPostDetail'
import { createPortal } from 'react-dom'
import { BASE_URL } from '../../services/settings'

export function Posts ({ userPosts }) {
  const [post, setPost] = useState(null)

  const infoPost = async (id) => {
    const datos = await (await fetch(`${BASE_URL}/posts/${id}`)).json()
    setPost(datos)
  }

  return (
    <div className='grid grid-cols-3 max-w-7xl'>
      {userPosts?.map(post => (
        <div className='mx-auto' key={post.id}>
          <button onClick={() => infoPost(post.id)}>
            <img className='max-w-sm' src={`http://localhost:3000/images/${post.photo}`} />
          </button>
        </div>
      ))}
      {post && createPortal(<ModalPostDetail post={post} setPost={setPost} />, document.getElementById('post-detail'))}
    </div>
  )
}
