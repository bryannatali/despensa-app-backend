const express = require('express');

const routes = express.Router();

const SessionController = require('../src/controllers/SessionController');
const UserController = require('../src/controllers/UserController');
const UserMarketListController = require('../src/controllers/UserMarketListController');
const MarketListItemController = require('../src/controllers/MarketListItemController');
const CategoryController = require('../src/controllers/CategoryController');

routes.post('/sessions', SessionController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/marketlists', UserMarketListController.index);
routes.get('/marketlists/:_id', UserMarketListController.show);
routes.post('/marketlists', UserMarketListController.store);
routes.delete('/marketlists/:_id', UserMarketListController.delete);

routes.post('/marketlists/:market_list/items', MarketListItemController.store);
routes.put('/marketlists/:market_list/items', MarketListItemController.update);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);

module.exports = routes;