import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './src/routes'
import './src/styles/index.css'

createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />
)
