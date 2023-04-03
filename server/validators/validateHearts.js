import { check, validationResult } from 'express-validator'
import { Heart } from '../models/Hearts.js'

export const validateHearts = [
  check('post')
    .custom(async (value, { req }) => {
      const existHeart = await Heart.findOne({
        where: {
          userId: req.user.id,
          postId: value
        }
      })

      if (existHeart) throw new Error('reassure')

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
