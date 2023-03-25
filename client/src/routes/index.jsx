import { createBrowserRouter } from 'react-router-dom'
import { Error } from './Error'
import { Root } from '../layouts/index'
import { Home } from '../pages/index'
import { ProtectedRoutes } from '../components/ProtectedRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    index: true
  },
  {
    path: '/',
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  }
])
