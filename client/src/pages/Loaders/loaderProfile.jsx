import { BASE_URL } from '../../services/settings'

export const loaderProfile = async ({ params }) => {
  const res = await fetch(`${BASE_URL}/users/${params.username}/`)
  const profile = await res.json()

  return { profile }
}
