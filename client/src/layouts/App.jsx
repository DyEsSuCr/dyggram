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
    <div className='min-h-screen bg-slate-50 flex flex-col md:flex-row overflow-hidden min-w-[320px]'>
      <Header />
      <div className='w-full flex flex-row justify-center'>
        <div className='w-full max-w-7xl p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
