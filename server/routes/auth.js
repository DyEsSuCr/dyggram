import { Router } from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import { auth } from '../controllers/index.js'
import { valt } from '../validators/index.js'

const router = Router()

router.post('/signin', valt.validateSignin, auth.authSignIn)
router.post('/signup', valt.validateSignup, auth.authSignUp)
router.get('/logout', auth.authLogout)
router.get('/verify', verifyToken, auth.verifyToken)

export default router
