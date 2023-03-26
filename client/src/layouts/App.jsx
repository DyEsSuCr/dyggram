import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/auth'
import { Header } from '../components/Headers/Header'

export function App () {
  const { removeUser } = useAuthStore()

  useEffect(() => {
    const verifyToken = async (url) => {
      const res = await fetch(url, {
        credentials: 'include'
      })

      if (!res.ok) removeUser()
    }

    verifyToken('http://localhost:3000/api/verify')
  }, [])

  return (
    <div className='min-h-screen min-w-full bg-slate-50'>
      <Header />
      <Outlet />
    </div>
  )
}
