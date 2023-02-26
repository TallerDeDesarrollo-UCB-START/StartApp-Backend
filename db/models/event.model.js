const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');

const EVENT_TABLE = 'events';

const EventSchema = {
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
  scheduledDate: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'scheduled_date',
  },
  leaderId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "leader_id",
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
    this.belongsTo(models.User, {
      as: 'leader'
    });
    this.belongsToMany(models.User, {
      as: 'participants',
      through: models.EventUser,
      foreignKey: 'eventId',
      otherKey: 'userId'
    });
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
