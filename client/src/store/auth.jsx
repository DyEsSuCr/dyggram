import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { BASE_URL } from '../services/settings'

export const useAuthStore = create(persist((set) => ({
  authUser: null,
  setUser: (user) => set((state) => ({ authUser: user })),

  removeUser: async () => {
    await fetch(`${BASE_URL}/logout/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })

    set((state) => ({ authUser: null }))
  },

  getUser: async (data, endpoint) => {
    const res = await fetch(`${BASE_URL}/${endpoint}/`, {
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
}), { name: 'userAuth' }))
