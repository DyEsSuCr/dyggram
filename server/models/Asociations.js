import { Post } from './Post.js'
import { User } from './Users.js'
import { Heart } from './Hearts.js'
import { Comment } from './Comments.js'

// note: 1-m
User.hasMany(Post, {
  foreignKey: 'userId',
  sourceKey: 'id'
})

Post.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id'
})

// note: 1-m
User.hasMany(Comment, {
  foreignKey: 'userId',
  sourceKey: 'id'
})

Comment.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id'
})

// note: 1-m
Post.hasMany(Comment, {
  foreignKey: 'postId',
  sourceKey: 'id'
})

Comment.belongsTo(Post, {
  foreignKey: 'postId',
  targetKey: 'id'
})

// note: 1-1
User.hasOne(Heart)
Heart.belongsTo(User)

// note: 1-m
Post.hasMany(Heart, {
  foreignKey: 'postId',
  sourceKey: 'id'
})

Heart.belongsTo(Post, {
  foreignKey: 'postId',
  targetKey: 'id'
})
