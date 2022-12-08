'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Mountain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mountain.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: DataTypes.STRING,
      rank: DataTypes.INTEGER,
      elevation: DataTypes.STRING,
      range: DataTypes.STRING,
      lat: DataTypes.DECIMAL,
      long: DataTypes.DECIMAL
    },
    {
      sequelize,
      modelName: 'Mountain',
      tableName: 'mountains'
    }
  )
  return Mountain
}
