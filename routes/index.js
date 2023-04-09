const express = require('express');

const categoriesRouter = require('./categories.router');
const expensesRouter = require('./expenses.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/categories', categoriesRouter);
  router.use('/expenses', expensesRouter);
}

module.exports = routerApi;
