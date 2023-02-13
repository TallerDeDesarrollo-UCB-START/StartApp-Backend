const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class EventsService {

  constructor(){}

  async create(data) {
    const newEvent = await models.Event.create(data);
    return newEvent;
  }

  async find(query) {
    const options = {}
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit =  limit;
      options.offset =  offset;
    }
    const events = await models.Event.findAll(options);
    return events;
  }

  async findOne(id) {
    const event = await models.Event.findByPk(id);
    if (!event) {
      throw boom.notFound('Event not found');
    }
    return event;
  }

  async update(id, changes) {
    const event = await this.findOne(id);
    const response = await event.update(changes);
    return response;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { response: true };
  }

}

module.exports = EventsService;
