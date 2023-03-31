
export function Posts ({ userPosts }) {
  return (
    <div>
      {userPosts?.map(post => (
        <div key={post.id}>
          <img className='max-w-sm' src={`http://localhost:3000/images/${post.photo}`} />
          <p dangerouslySetInnerHTML={{ __html: post.plot }} />
        </div>
      ))}
    </div>
  )
}
