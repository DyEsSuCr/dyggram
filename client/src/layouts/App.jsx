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
    <div className='relative min-h-screen bg-slate-50 flex flex-col md:flex-row overflow-hidden min-w-[320px]'>
      <Header />
      <div className='w-full flex justify-center'>
        <Outlet />
      </div>
    </div>
  )
}
