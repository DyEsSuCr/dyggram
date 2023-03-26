import { User } from '../models/Users.js'

export const findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        is_active: true
      },
      attributes: {
        exclude: ['is_active', 'password', 'updatedAt']
      }
    })

    if (users.length <= 0) return res.status(200).json('No Users')

    res.status(200).json(users)
  } catch (err) {
    res.status(404).json(err)
  }
}

export const findOneUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.params.username
      },
      attributes: {
        exclude: ['is_active', 'password', 'updatedAt']
      }
    })

    if (!user) return res.status(404).json('User not found')

    res.status(200).json(user)
  } catch (err) {
    res.status(404).json(err)
  }
}
