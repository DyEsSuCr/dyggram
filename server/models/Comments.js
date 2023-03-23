import { DataTypes } from 'sequelize'
import { conectionSequelize } from '../database/db.js'

export const Comment = conectionSequelize.define('comments', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  comment: {
    type: DataTypes.STRING(180),
    allowNull: false
  }
})
