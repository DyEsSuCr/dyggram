import { Router } from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import { hearts } from '../controllers/index.js'

const router = Router()

router.post('/hearts', verifyToken, hearts.createHeart)

export default router
