const { Event, EventSchema } = require('./event.model');
const { User, UserSchema } = require('./user.model');
const { Role, RoleSchema } = require('./role.model');
const { ProfessionArea, ProfessionAreaSchema } = require('./profession-area.model');
const { EventUser, EventUserSchema } = require('./event-user.model');

function setupModels(sequelize) {
  Event.init(EventSchema, Event.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  EventUser.init(EventUserSchema, EventUser.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  ProfessionArea.init(ProfessionAreaSchema, ProfessionArea.config(sequelize));

  Event.associate(sequelize.models);
  User.associate(sequelize.models);
  Role.associate(sequelize.models);
  ProfessionArea.associate(sequelize.models);
}

module.exports = setupModels;
