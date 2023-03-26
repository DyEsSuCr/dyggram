import { Router } from 'express'
import { users } from '../controllers/index.js'

const router = Router()

router.get('/users', users.findAllUsers)
router.get('/users/:username', users.findOneUser)

export default router
