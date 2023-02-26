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
    const options = {
      include: ['role', 'professionArea', 'myEvents'],
    }
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit =  limit;
      options.offset =  offset;
    }
    const users = await models.User.findAll(options);
    return users;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const response = await user.update(changes);
    return response;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { response: true };
  }

}

module.exports = UsersService;
