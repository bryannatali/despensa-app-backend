const express = require('express');

const routes = express.Router();

const SessionController = require('../src/controllers/SessionController');
const UserController = require('../src/controllers/UserController');

routes.post('/sessions', SessionController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

module.exports = routes;