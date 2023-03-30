import { Post } from '../models/Post.js'

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
