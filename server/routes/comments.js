import { Router } from 'express'
import { comments } from '../controllers/index.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const router = Router()

router.post('/comments', verifyToken, comments.createComment)

export default router
