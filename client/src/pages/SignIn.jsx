import { useForm } from 'react-hook-form'
import { validateSignIn } from '../validators/validateSignIn'

export function SignIn () {
  const { email, password } = validateSignIn
  const { register, handleSubmit, formState: { errors } } = useForm()

  const login = async (data) => {
    const res = await fetch('http://localhost:3000/api/signin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })

    const user = await res.json()

    console.log(user)
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form className='flex flex-col gap-4 shadow-lg shadow-dark-gray p-4 rounded-lg' onSubmit={handleSubmit(login)}>
        <h1 className='text-2xl font-semibold text-center'>SignUp</h1>

        <input type='email' {...register('email', email)} />
        {errors.email &&
          <span>{errors.email?.type === 'pattern' ? 'Invalid email' : 'Required'}</span>}

        <input type='password' {...register('password', password)} />
        {errors.password &&
          <span>{errors.password?.type === 'pattern' ? 'Invalid passoword' : 'Required'}</span>}

        <input type='submit' />
      </form>
    </div>
  )
}
