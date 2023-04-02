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

export const deleteHeart = async (req, res) => {
  try {
    await Heart.destroy({
      where: {
        userId: req.user.id,
        postId: req.body.post
      }
    })

    res.status(200).json({ messaje: 'Deleted heart' })
  } catch (err) {
    res.status(404).json(err)
  }
}
