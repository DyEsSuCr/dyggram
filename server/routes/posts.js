import { Router } from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import { post } from '../controllers/index.js'
import upload from '../utils/diskStorage.js'

const router = Router()

router.post('/posts', verifyToken, upload.single('photo'), post.createPost)
router.get('/posts/:id', post.findOnePost)
router.get('/posts/:id/hearts', post.findPostHearts)

export default router
