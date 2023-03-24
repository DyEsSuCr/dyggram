import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  authUser: null,
  setUser: (user) => set((state) => ({ authUser: user })),
  removeUser: () => set((state) => ({ authUser: null })),
  getUser: async (data) => {
    const res = await fetch('http://localhost:3000/api/signin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })

    const user = await res.json()

    if (user.error) return

    set((state) => ({ ...state, authUser: user }))
  }
}))
