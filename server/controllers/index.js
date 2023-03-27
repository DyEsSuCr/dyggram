import { authSignIn, authSignUp, verifyToken, authLogout } from './auth.js'
import { findAllUsers, findOneUser, updateUser } from './users.js'

export const auth = { authSignIn, authSignUp, verifyToken, authLogout }
export const users = { findAllUsers, findOneUser, updateUser }
