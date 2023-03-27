import { useLoaderData, Navigate } from 'react-router-dom'

export function Profile () {
  const { profile } = useLoaderData()

  return (
    <div>
      {profile === 'User not found' && <Navigate to='/home' />}

      <h1>hola {profile.username}</h1>
      <a href={profile.web}>Mi web</a>
    </div>
  )
}
