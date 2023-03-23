import bcryptjs from 'bcryptjs'
import { check, validationResult } from 'express-validator'
import { User } from '../models/Users.js'

export const validateSignin = [
  check('email')
    .exists()
    .not()
    .notEmpty()
    .isEmail()
    .custom(async (value, { req }) => {
      const user = await User.findOne({
        where: {
          email: value
        }
      })

      if (!user) throw new Error('User not found')

      return true
    }),

  check('password')
    .exists()
    .not()
    .notEmpty()
    .custom(async (value, { req }) => {
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      })

      const comparePassword = await bcryptjs.compare(value, user.password)

      if (!comparePassword) throw new Error('Password not match')

      return true
    }),

  (req, res, next) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (err) {
      res.status(403).json({ error: err.array() })
    }
  }
]
