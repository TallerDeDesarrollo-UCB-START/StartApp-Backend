const { Model, DataTypes, Sequelize } = require('sequelize');
const { EVENT_TABLE } = require('./event.model');
const { USER_TABLE } = require('./user.model');

const EVENT_USER_TABLE = 'events_users';

const EventUserSchema = {
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
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "event_id",
    references: {
      model: EVENT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}


class EventUser extends Model {

  static associate(models) {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EVENT_USER_TABLE,
      modelName: 'EventUser',
      timestamps: false
    }
  }
}

module.exports = { EventUser, EventUserSchema, EVENT_USER_TABLE };
