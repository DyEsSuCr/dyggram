import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'

export function Root () {
  return (
    <div className='min-h-screen min-w-full text-center flex justify-center items-center'>
      <SignUp />
      <SignIn />
    </div>
  )
}
