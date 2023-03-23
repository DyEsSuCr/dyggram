import { DataTypes } from 'sequelize'
import { conectionSequelize } from '../database/db.js'

export const Heart = conectionSequelize.define('hearts', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  }
})
