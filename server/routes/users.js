import { Router } from 'express'
import { users } from '../controllers/index.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import upload from '../utils/diskStorage.js'

const router = Router()

router.get('/users', users.findAllUsers)
router.get('/users/:username', users.findOneUser)
router.get('/users/:id/posts', users.findUserPosts)
router.patch('/users/:username', verifyToken, upload.single('avatar'), users.updateUser)

export default router
