import { useAuthStore } from '../store/auth'

export function Home () {
  const { authUser } = useAuthStore()

  return (
    <div>
      <h1>Welcome {authUser?.username}</h1>
    </div>
  )
}
