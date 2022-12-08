'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Checklist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Checklist.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  }
  Checklist.init(
    {
      hasClimbed: DataTypes.BOOLEAN,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      mountainId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'mountains',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Checklist',
      tableName: 'checklists'
    }
  )
  return Checklist
}
