import jwt from 'jsonwebtoken'
import { User } from '../models/Users.js'
import { env } from '../config.js'

export const authSignIn = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      },
      attributes: ['id', 'username']
    })

    const token = jwt.sign({ id: user.id }, env.KEY, {
      expiresIn: 86400
    })

    res.cookie('access_token', token, { httpOnly: true }).status(200).json(user)
  } catch (err) {
    res.status(404).json(err)
  }
}

export const authSignUp = async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })

    const token = jwt.sign({ id: newUser.id }, env.KEY, {
      expiresIn: 86400
    })

    const user = { id: newUser.id, username: newUser.username }

    res.cookie('access_token', token, { httpOnly: true }).status(200).json(user)
  } catch (err) {
    res.status(404).json(err)
  }
}

export const verifyToken = async (req, res) => {
  try {
    res.send('is authenticated')
  } catch (err) {
    res.status(404).json(err)
  }
}

export const authLogout = async (req, res) => {
  try {
    res.clearCookie('access_token').send('logout')
  } catch (err) {
    res.status(404).json(err)
  }
}
