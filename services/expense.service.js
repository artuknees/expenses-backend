// const faker = require('faker');
// const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

// saco pool al aplicar sequelize
// const pool = require('../libs/postgres.pool.js');
// const sequelize = require('../libs/sequelize')

class ExpenseService {

  constructor() {
  }

  async create(data) {
    const newExpense = await models.Expense.create(data);
    return newExpense;
  }

  async find() {
    // const options = {
    //   include: ['category'],
    //   where:{}
    // };
    const rta = await models.Expense.findAll();
    // const rta = await models.Expense.findAll(options);
    return rta;
  }

  // async findOne(id) {
  //   const product = this.products.find(item => item.id === id);
  //   if (!product) {
  //     throw boom.notFound('product not found');
  //   }
  //   if (product.isBlock) {
  //     throw boom.conflict('product is block');
  //   }
  //   return product;
  // }

  // async update(id, changes) {
  //   const index = this.products.findIndex(item => item.id === id);
  //   if (index === -1) {
  //     throw boom.notFound('product not found');
  //   }
  //   const product = this.products[index];
  //   this.products[index] = {
  //     ...product,
  //     ...changes
  //   };
  //   return this.products[index];
  // }

  // async delete(id) {
  //   const index = this.products.findIndex(item => item.id === id);
  //   if (index === -1) {
  //     throw boom.notFound('product not found');
  //   }
  //   this.products.splice(index, 1);
  //   return { id };
  // }

}

module.exports = ExpenseService;