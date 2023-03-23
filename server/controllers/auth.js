import { User } from '../models/Users.js'

export const authSignIn = async (req, res) => {
  console.log('asd')
  res.status(200).json({ User })
}

export const authSignUp = async (req, res) => {
  console.log('dsa')
  res.status(200).json({ User })
}
