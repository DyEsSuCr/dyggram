import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../../services/settings'

export function Form () {
  const { register, handleSubmit, watch } = useForm()
  const [cover, setCover] = useState(null)

  const createPost = async (data) => {
    const { plot, photo } = data

    const formData = new FormData()

    formData.append('photo', photo[0])
    formData.append('plot', plot)

    fetch(`${BASE_URL}`)
  }

  const photo = watch('photo')

  useEffect(() => {
    const reader = new window.FileReader()

    if (!photo || photo.length <= 0) return

    reader.readAsDataURL(photo[0])

    reader.onloadend = function () {
      setCover(reader.result.toString())
    }
  }, [photo])

  return (
    <form onSubmit={handleSubmit(createPost)}>

      <input type='file' {...register('photo', { required: true })} />
      {cover && <img src={cover} alt='preview' />}

      <input type='text' {...register('plot', { required: true })} />

      <input type='submit' />

    </form>
  )
}
