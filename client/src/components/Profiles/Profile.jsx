import { useLoaderData, Navigate } from 'react-router-dom'
import { Posts } from '../Posts/Posts'

export function Profile () {
  const { user, userPosts } = useLoaderData()

  return (
    <div>
      {user === 'User not found' && <Navigate to='/home' />}

      <h1>hola {user.username}</h1>
      <Posts userPosts={userPosts} />
    </div>
  )
}
