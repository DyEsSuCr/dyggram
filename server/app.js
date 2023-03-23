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

// NOTE: Variables
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// NOTE: App Init
const app = express()

// NOTE: Settings
app.set('port', env.PORT)

// NOTE: MiddleWares
app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials: true }))

// NOTE: Routes
app.use('/api', authRoutes)

// NOTE: Static Files
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
  res.status(404).json({
    error: 'Rout Not Found'
  })
})

export default app
