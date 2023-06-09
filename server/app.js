// NOTE: Thirds
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// NOTE: Node
import path from 'path'
import { fileURLToPath } from 'url'

// NOTE: Local
import { env } from './config.js'
import authRoutes from './routes/auth.js'
import usersRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import heartsRoutes from './routes/heart.js'
import commentsRoutes from './routes/comments.js'

// NOTE: Variables
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// NOTE: App Init
const app = express()

// NOTE: Settings
app.set('port', env.PORT)

// NOTE: MiddleWares
app.use(cookieParser())
app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))

// NOTE: Routes
app.use('/api', authRoutes)
app.use('/api', usersRoutes)
app.use('/api', postRoutes)
app.use('/api', heartsRoutes)
app.use('/api', commentsRoutes)

// NOTE: Static Files
app.use(express.static(path.join(__dirname, 'uploads')))

app.use((req, res) => {
  res.status(404).json({
    error: 'Rout Not Found'
  })
})

export default app
