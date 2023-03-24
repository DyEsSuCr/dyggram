import { useAuthStore } from '../store/auth'

export function Home () {
  const { authUser, removeUser } = useAuthStore()

  return (
    <div>
      <h1>Welcome {authUser?.username}</h1>
      <button onClick={() => removeUser()}>Cerrar </button>
    </div>
  )
}
