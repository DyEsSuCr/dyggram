import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { BASE_URL } from '../services/settings'
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

    verifyToken(`${BASE_URL}/verify/`)
  }, [])

  return (
    <div className='min-h-screen min-w-full bg-slate-50'>
      <Header />
      <Outlet />
    </div>
  )
}
