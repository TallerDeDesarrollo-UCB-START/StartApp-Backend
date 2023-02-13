const express = require('express');

const eventsRouter = require('./events.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/events', eventsRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
