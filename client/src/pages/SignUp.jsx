import { useForm } from 'react-hook-form'
import { validateSignUp } from '../validators/validateSignUp'
import { useAuthStore } from '../store/auth'
import { Navigate } from 'react-router-dom'

export function SignUp () {
  const { username, email, password, defaultValues } = validateSignUp
  const { getUser, authUser } = useAuthStore()
  const { register, handleSubmit, watch, formState: { errors } } = useForm(defaultValues)

  const signup = (data) => getUser(data, 'signup')

  return (
    <div className='flex justify-center items-center min-h-screen'>
      {authUser && <Navigate to='/home' />}

      <form className='flex flex-col gap-4 shadow-lg shadow-dark-gray p-4 rounded-lg' onSubmit={handleSubmit(signup)}>
        <h1 className='text-2xl font-semibold text-center'>SignUp</h1>

        <input type='text' {...register('username', username)} />
        {errors.username &&
          <span>{errors.username?.type === 'pattern' ? 'Invalid username' : 'Required'}</span>}

        <input type='email' {...register('email', email)} />
        {errors.email &&
          <span>{errors.email?.type === 'pattern' ? 'Invalid email' : 'Required'}</span>}

        <input type='password' {...register('password', password)} />
        {errors.password &&
          <span>{errors.password?.type === 'pattern' ? 'Invalid passoword' : 'Required'}</span>}

        <input
          type='password' {...register('confirmPassword', {
            required: true,
            validate: (val) => {
              if (watch('password') !== val) {
                return 'Your passwords do no match'
              }
            }
          })}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword?.message}</span>}

        <input type='submit' />
      </form>
    </div>
  )
}
