const { Event, EventSchema } = require('./event.model');
const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
  Event.init(EventSchema, Event.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  //Event.associate(sequelize.models);
}

module.exports = setupModels;
