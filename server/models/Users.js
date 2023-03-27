import bcrypt from 'bcryptjs'
import { DataTypes } from 'sequelize'
import { conectionSequelize } from '../database/db.js'

export const User = conectionSequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false,
    set (value) {
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(value, salt)

      this.setDataValue('password', hash)
    }
  },
  name: {
    type: DataTypes.STRING(120),
    allowNull: true
  },
  username: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: true
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true
  },
  biography: {
    type: DataTypes.STRING(180),
    allowNull: true
  },
  web: {
    type: DataTypes.STRING(120),
    allowNull: true
  }
})
