export function ModalPostDetail ({ post, setPost }) {
  return (
    <div className='absolute top-0 left-0 w-full h-screen flex justify-center items-center gap-10 bg-[#2f2f2f50]'>
      <img className='max-w-sm' src={`http://localhost:3000/images/${post.photo}`} />
      <p className='bg-slate-800 text-white' dangerouslySetInnerHTML={{ __html: post.plot }} />
      <button className='absolute top-8 right-8 text-4xl' onClick={() => setPost(null)}>
        X
      </button>
    </div>
  )
}
