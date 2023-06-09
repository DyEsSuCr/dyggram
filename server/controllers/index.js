import { authSignIn, authSignUp, verifyToken, authLogout } from './auth.js'
import { findAllUsers, findOneUser, findUserPosts, updateUser } from './users.js'
import { createPost, findOnePost, findPostHearts } from './posts.js'
import { createHeart, deleteHeart, existHeart } from './hearts.js'
import { createComment } from './comments.js'

export const auth = { authSignIn, authSignUp, verifyToken, authLogout }
export const users = { findAllUsers, findOneUser, updateUser, findUserPosts }
export const post = { createPost, findOnePost, findPostHearts }
export const hearts = { createHeart, deleteHeart, existHeart }
export const comments = { createComment }
