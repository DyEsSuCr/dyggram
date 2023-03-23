import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { validateSignUp } from '../validators/validateSignUp'

export function SignUp () {
  const { username, email, password, defaultValues } = validateSignUp
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm(defaultValues)
  const [succes, setSucces] = useState(true)

  const createUser = async (data) => {
    reset()
    setSucces(!succes)
    setTimeout(() => setSucces(true), 5000)
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form className='flex flex-col gap-4 shadow-lg shadow-dark-gray p-4 rounded-lg' onSubmit={handleSubmit(createUser)}>
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
        {!succes && <p>Registrado</p>}
      </form>
    </div>
  )
}
