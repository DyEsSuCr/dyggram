import { useLoaderData, Navigate } from 'react-router-dom'
import { Follwers } from './Follwers'
import { Posts } from '../Posts/Posts'

export function Profile () {
  const { user, userPosts } = useLoaderData()

  const image = (!user.avatar) ? 'https://n9.cl/jgy2d' : `http://localhost:3000/images/${user.avatar}`

  return (
    <>
      {user === 'User not found' && <Navigate to='/home' />}

      <div className='flex flex-col gap-6 justify-evenly items-center md:flex-row md:gap-0 mb-8'>
        <figure className='rounded-full overflow-hidden w-28 h-28'>
          <img className='object-fill h-full' src={image} alt={user.userame} />
        </figure>
        <h3 className='text-2xl md:hidden font-semibold'>{user.username}</h3>
        <div className='flex justify-center gap-3'>
          <Follwers text='publications' count={userPosts} />
          <Follwers text='followers' count={userPosts} />
          <Follwers text='followings' count={userPosts} />
        </div>
      </div>

      <Posts userPosts={userPosts} />
    </>
  )
}
