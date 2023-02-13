const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UsersService {

  constructor(){}

  async create(data) {
    data.volunteerMinutes = 0;
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find(query) {
    const options = {}
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit =  limit;
      options.offset =  offset;
    }
    const events = await models.User.findAll(options);
    return events;
  }

  async findOne(id) {
    const event = await models.User.findByPk(id);
    if (!event) {
      throw boom.notFound('User not found');
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

module.exports = UsersService;
