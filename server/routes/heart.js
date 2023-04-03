import { Router } from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import { validateHearts } from '../validators/validateHearts.js'
import { hearts } from '../controllers/index.js'

const router = Router()

router.post('/hearts', verifyToken, validateHearts, hearts.createHeart)
router.delete('/hearts', verifyToken, hearts.deleteHeart)

export default router
