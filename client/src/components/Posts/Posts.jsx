import { useFetch } from '../../hooks/useFetch'
import { BASE_URL } from '../../services/settings'

export function Posts () {
  const { data } = useFetch(`${BASE_URL}/users/972596c2-aa4b-4046-a784-b714dc95a17c/posts`)

  return (
    <div>
      {data?.map(post => (
        <div key={post.id}>
          <img className='max-w-sm' src={`http://localhost:3000/images/${post.photo}`} />
          <p dangerouslySetInnerHTML={{ __html: post.plot }} />
        </div>
      ))}
    </div>
  )
}
