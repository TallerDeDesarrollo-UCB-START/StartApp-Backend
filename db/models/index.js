const { Event, EventSchema } = require('./event.model');
Event
function setupModels(sequelize) {
  Event.init(EventSchema, Event.config(sequelize));

  //Event.associate(sequelize.models);
}

module.exports = setupModels;
