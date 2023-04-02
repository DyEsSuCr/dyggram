import { Post } from '../models/Post.js'
import { Heart } from '../models/Hearts.js'

export const createPost = async (req, res) => {
  const { plot } = req.body

  try {
    const post = await Post.create({
      plot,
      photo: req.file.filename,
      userId: req.user.id
    })

    res.status(201).json(post)
  } catch (err) {
    res.status(404).json(err)
  }
}

export const findOnePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id)

    res.status(201).json(post)
  } catch (err) {
    res.status(404).json(err)
  }
}

export const findPostHearts = async (req, res) => {
  try {
    const hearts = await Heart.findAll({
      where: {
        postId: req.params.id
      }
    })
    res.status(200).json(hearts)
  } catch (err) {
    res.status(404).json(err)
  }
}
