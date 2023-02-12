const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const description = Joi.string().min(10).max(200);
const mode = Joi.string();
const location = Joi.string().max(50);
const date = Joi.string();
const projectId = Joi.number().integer();
const categoryId = Joi.number().integer();
const leaderId = Joi.number().integer();
const status = Joi.string();
const startTime = Joi.string();
const endTime = Joi.string();

const limit = Joi.number();
const offset = Joi.number();

const createEventSchema = Joi.object({
  name: name.required(),
  description: description,
  mode: mode.required(),
  location: location.required(),
  date: date.required(),
  projectId: projectId.required(),
  categoryId: categoryId.required(),
  leaderId: leaderId,
  status: status.required(),
  startTime: startTime.required(),
  endTime: endTime.required()
});

const updateEventSchema = Joi.object({
  name: name,
  description: description,
  mode: mode,
  location: location,
  date: date,
  projectId: projectId,
  categoryId: categoryId,
  leaderId: leaderId,
  status: status,
  startTime: startTime,
  endTime: endTime,
});

const getEventSchema = Joi.object({
  id: id.required(),
});

const queryEventSchema = Joi.object({
  limit,
  offset,
});

module.exports = { createEventSchema, updateEventSchema, getEventSchema, queryEventSchema }
