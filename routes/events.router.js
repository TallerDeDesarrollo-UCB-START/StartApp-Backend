const express = require('express');

const EventsService = require('../services/event.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createEventSchema, updateEventSchema, getEventSchema, queryEventSchema } = require('../schemas/event.schema');

const router = express.Router();
const service = new EventsService();

router.get('/',
  validatorHandler(queryEventSchema, 'query'),
  async (request, response, next) => {
    try {
      const events = await service.find(request.query);
      response.json(events);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  validatorHandler(getEventSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const event = await service.findOne(id);
      response.json(event);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createEventSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newEvent = await service.create(body);
      response.status(201).json(newEvent);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getEventSchema, 'params'),
  validatorHandler(updateEventSchema, 'body'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = request.body;
      const event = await service.update(id, body);
      response.json(event);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getEventSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      await service.delete(id);
      response.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
