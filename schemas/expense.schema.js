const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(20);
const price = Joi.number().integer();
// const date = Joi.date().timestamp();
const categoryId = Joi.number().integer();

const createExpenseSchema = Joi.object({
  name: name.required(),
  price: price.required(),
//   date: date.required(),
  categoryId: categoryId.required(),
});

const updateExpenseSchema = Joi.object({
  name: name,
  price: price,
//   date: date,
  categoryId: categoryId
});

const getExpenseSchema = Joi.object({
  id: id.required(),
});

module.exports = { createExpenseSchema, updateExpenseSchema, getExpenseSchema }