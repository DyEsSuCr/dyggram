import { DataTypes } from 'sequelize'
import { conectionSequelize } from '../database/db.js'

export const Post = conectionSequelize.define('posts', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  plot: {
    type: DataTypes.STRING(180),
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
})
