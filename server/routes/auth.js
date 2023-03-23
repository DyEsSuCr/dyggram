import { Router } from 'express'
import { auth } from '../controllers/index.js'
import { valt } from '../validators/index.js'

const router = Router()

router.post('/signin', valt.validateSignin, auth.authSignIn)
router.post('/signup', valt.validateSignup, auth.authSignUp)

export default router
