import { useState } from 'react'
import { ModalPostDetail } from '../../portals/ModalPostDetail'
import { createPortal } from 'react-dom'
import { BASE_URL } from '../../services/settings'

export function Posts ({ userPosts }) {
  const [post, setPost] = useState(null)

  const infoPost = async (id) => {
    const detailPost = await (await fetch(`${BASE_URL}/posts/${id}`)).json()
    setPost(detailPost)
  }

  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {userPosts?.map(post => (
        <div className='flex justify-center' key={post.id}>
          <figure onClick={() => infoPost(post.id)} className='cursor-pointer rounded-md overflow-hidden'>
            <img className='lg:max-w-sm' src={`http://localhost:3000/images/${post.photo}`} />
          </figure>
        </div>
      ))}
      {post && createPortal(<ModalPostDetail post={post} setPost={setPost} />, document.getElementById('post-detail'))}
    </div>
  )
}
