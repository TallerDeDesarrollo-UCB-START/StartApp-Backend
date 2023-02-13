const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
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
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "role_id"
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
    field: "profession_area_id"
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
    //this.belongsTo(models.Category, { as: 'category' });
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
