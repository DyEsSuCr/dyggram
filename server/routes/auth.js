import { Router } from 'express'
import { auth } from '../controllers/index.js'

const router = Router()

router.post('/signin', auth.authSignIn)
router.post('/signup', auth.authSignUp)

export default router
