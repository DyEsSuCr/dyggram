import { authSignIn, authSignUp, verifyToken, authLogout } from './auth.js'
import { findAllUsers, findOneUser, findUserPosts, updateUser } from './users.js'
import { createPost, findOnePost } from './posts.js'

export const auth = { authSignIn, authSignUp, verifyToken, authLogout }
export const users = { findAllUsers, findOneUser, updateUser, findUserPosts }
export const post = { createPost, findOnePost }
