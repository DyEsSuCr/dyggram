import { useRouteError } from 'react-router-dom'

export function Error () {
  const error = useRouteError()

  return (
    <div className='min-h-screen min-w-full text-center flex justify-center items-center'>
      <h1 className='text-9xl my-[10vh]'>
        <b className='text-red-500 font-semibold'>Error</b> {error.statusText || error.messaje}
      </h1>
    </div>
  )
}
