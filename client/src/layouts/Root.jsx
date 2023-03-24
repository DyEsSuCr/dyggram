import { SignIn, SignUp } from '../pages/index'

export function Root () {
  return (
    <div className='min-h-screen min-w-full text-center flex justify-center items-center'>
      <SignUp />
      <SignIn />
    </div>
  )
}
