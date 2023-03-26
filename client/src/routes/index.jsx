import { createBrowserRouter } from 'react-router-dom'
import { Error } from './Error'
import { Root, App } from '../layouts/index'
import { Home, Explore, Profile, Create } from '../pages/index'
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
        path: '/',
        element: <App />,
        children: [
          {
            path: '/home',
            element: <Home />
          },
          {
            path: 'explore',
            element: <Explore />
          },
          {
            path: '/profile',
            element: <Profile />
          },
          {
            path: '/create',
            element: <Create />
          }
        ]
      }
    ]
  }
])
