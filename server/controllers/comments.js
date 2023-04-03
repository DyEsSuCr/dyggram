import { Comment } from '../models/Comments.js'

export const createComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      comment: req.body.comment,
      userId: req.user.id,
      postId: req.body.post
    })

    res.status(201).json(comment)
  } catch (err) {
    res.status(404).json(err)
  }
}
