const { Model, DataTypes, Sequelize } = require('sequelize');

const PROFESSION_AREA_TABLE = 'profession_areas';

const ProfessionAreaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.Now
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}


class ProfessionArea extends Model {

  static associate(models) {
    this.hasMany(models.User, {
      as: 'user',
      foreignKey: 'professionAreaId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROFESSION_AREA_TABLE,
      modelName: 'ProfessionArea',
      timestamps: false
    }
  }
}

module.exports = { ProfessionArea, ProfessionAreaSchema, PROFESSION_AREA_TABLE };
