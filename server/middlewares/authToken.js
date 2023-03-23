import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'

export const authToken = async (req, res, next) => {
  const token = req.cookies.access_token

  try {
    if (!token) return res.status(403).json({ messaje: 'No token provided' })

    const decoded = jwt.verify(token, process.env.SECRET)
    const user = await User.findByPk(decoded.id, {
      attributes: {
        exclude: ['password']
      }
    })

    if (!user) return res.status(404).json({ messaje: 'User not found' })

    req.user = user
    next()
  } catch (err) {
    res.clearCookie('access_token')
    res.status(401).json({ messaje: 'not authenticated' })
  }
}
