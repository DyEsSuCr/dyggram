import { Router } from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import { post } from '../controllers/index.js'
import upload from '../utils/diskStorage.js'

const router = Router()

router.post('/posts', verifyToken, upload.single('photo'), post.createPost)
router.get('/posts/:id/posts', post.findUserPosts)

export default router
