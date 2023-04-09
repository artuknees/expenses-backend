const express = require('express');

const ExpenseService = require('./../services/expense.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createExpenseSchema, updateExpenseSchema, getExpenseSchema } = require('./../schemas/expense.schema');

const router = express.Router();
const service = new ExpenseService();

router.get('/', async (req, res, next) => {
  try {
    const expenses = await service.find();
    res.json(expenses);
  } catch (error) {
    next(error);
  }
});

// router.get('/:id',
//   validatorHandler(getProductSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const product = await service.findOne(id);
//       res.json(product);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

router.post('/',
  validatorHandler(createExpenseSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newExpense = await service.create(body);
      res.status(201).json(newExpense);
    } catch (error) {
      next(error);
    }
  }
);

// router.patch('/:id',
//   validatorHandler(getProductSchema, 'params'),
//   validatorHandler(updateProductSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const body = req.body;
//       const product = await service.update(id, body);
//       res.json(product);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.delete('/:id',
//   validatorHandler(getProductSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       await service.delete(id);
//       res.status(201).json({id});
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;