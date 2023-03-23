import { createBrowserRouter } from 'react-router-dom'
import { Error } from './Error'
import { Root } from '../layouts/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />
  }
])
