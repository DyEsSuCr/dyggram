import { Heart } from '../models/Hearts.js'

export const createHeart = async (req, res) => {
  try {
    const heart = await Heart.create({
      postId: req.body.post,
      userId: req.user.id
    })

    res.status(201).json(heart)
  } catch (err) {
    res.status(404).json(err)
  }
}
