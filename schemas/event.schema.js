const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const description = Joi.string().min(10).max(200);
const mode = Joi.string();
const location = Joi.string().max(50);
const scheduledDate = Joi.string();
const leaderId = Joi.number().integer();
const startTime = Joi.string();
const endTime = Joi.string();

const limit = Joi.number();
const offset = Joi.number();

const createEventSchema = Joi.object({
  name: name.required(),
  description: description,
  mode: mode.required(),
  location: location.required(),
  scheduledDate: scheduledDate.required(),
  leaderId: leaderId,
  startTime: startTime.required(),
  endTime: endTime.required()
});

const updateEventSchema = Joi.object({
  name: name,
  description: description,
  mode: mode,
  location: location,
  scheduledDate: scheduledDate,
  leaderId: leaderId,
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
