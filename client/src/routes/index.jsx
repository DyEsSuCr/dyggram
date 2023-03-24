import { createBrowserRouter } from 'react-router-dom'
import { Error } from './Error'
import { Root } from '../layouts/index'
import { Home } from '../pages/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />
  },
  {
    path: '/home',
    element: <Home />
  }
])
