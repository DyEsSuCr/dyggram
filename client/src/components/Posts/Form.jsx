import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { BASE_URL } from '../../services/settings'

export function Form () {
  const { register, handleSubmit, watch } = useForm()
  const [cover, setCover] = useState(null)
  const [plot, setPlot] = useState('')

  const createPost = async (data) => {
    const { photo } = data

    const formData = new FormData()

    formData.append('photo', photo[0])
    formData.append('plot', plot)

    const res = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      credentials: 'include',
      body: formData
    })

    if (!res.ok) console.log('res.ok fail')
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

      <ReactQuill value={plot} onChange={setPlot} />

      <input type='submit' />
    </form>
  )
}
