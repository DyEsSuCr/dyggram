import { Outlet, Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth'

export function ProtectedRoutes () {
  const { authUser } = useAuthStore()

  if (!authUser) return <Navigate to='/' />

  return <Outlet />
}
