import { useEffect } from 'react'
import { useAuthStore } from '../store/auth'

export function Home () {
  const { authUser, removeUser } = useAuthStore()

  useEffect(() => {
    const verifyToken = async (url) => {
      const res = await fetch(url, {
        credentials: 'include'
      })

      if (res.ok) return

      removeUser()
    }

    verifyToken('http://localhost:3000/api/verify')
  }, [])

  return (
    <div>
      <h1>Welcome {authUser?.username}</h1>
      <button onClick={async () => removeUser()}>Cerrar</button>
    </div>
  )
}
