import { BASE_URL } from '../../services/settings'

export const loaderProfile = async ({ params }) => {
  const user = await (await fetch(`${BASE_URL}/users/${params.username}`)).json()
  const userPosts = await (await fetch(`${BASE_URL}/users/${user.id}/posts`)).json()

  return { user, userPosts }
}
