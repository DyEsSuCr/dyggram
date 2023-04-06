export function Follwers ({ count, text }) {
  return (
    <div className='flex flex-col items-center md:flex-row md:gap-2'>
      <strong className='text-xl'>{count.length}</strong>
      <span className='text-base'>{text}</span>
    </div>
  )
}
