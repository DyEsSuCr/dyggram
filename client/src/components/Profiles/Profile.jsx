import { useLoaderData, Navigate } from 'react-router-dom'
import { Posts } from '../Posts/Posts'

export function Profile () {
  const { user, userPosts } = useLoaderData()

  return (
    <>
      {user === 'User not found' && <Navigate to='/home' />}
      <Posts userPosts={userPosts} />
    </>
  )
}
