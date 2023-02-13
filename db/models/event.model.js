const { Model, DataTypes, Sequelize } = require('sequelize');

const EVENT_TABLE = 'events';

const EventSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  mode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  leaderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "leader_id"
  },
  startTime: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "start_time"
  },
  endTime: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "end_time"
  },
}


class Event extends Model {

  static associate(models) {
    //this.belongsTo(models.Category, { as: 'category' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EVENT_TABLE,
      modelName: 'Event',
      timestamps: false
    }
  }
}

module.exports = { Event, EventSchema, EVENT_TABLE };
