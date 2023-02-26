const { Model, DataTypes, Sequelize } = require('sequelize');
const { ROLE_TABLE } = require('./role.model');
const { PROFESSION_AREA_TABLE } = require('./profession-area.model');

const USER_TABLE = 'users';

const UserSchema = {
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
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "role_id",
    references: {
      model: ROLE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  volunteerMinutes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "volunteer_minutes"
  },
  birthday: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  professionAreaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "profession_area_id",
    references: {
      model: PROFESSION_AREA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    field: "phone_number"
  },
  emergencyContactName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: "emergency_contact_name"
  },
  emergencyContactRelationship: {
    type: DataTypes.STRING,
    allowNull: true,
    field: "emergency_contact_relationship"
  },
  emergencyContactPhoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    field: "emergency_contact_phone_number"
  },
  aboutMe: {
    type: DataTypes.STRING,
    allowNull: true,
    field: "about_me"
  }
}


class User extends Model {

  static associate(models) {
    this.belongsTo(models.Role, {
      as: 'role'
    });
    this.belongsTo(models.ProfessionArea, {
      as: 'professionArea'
    });
    this.belongsToMany(models.Event, {
      as: 'myEvents',
      through: models.EventUser,
      foreignKey: 'userId',
      otherKey: 'eventId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { User, UserSchema, USER_TABLE };
