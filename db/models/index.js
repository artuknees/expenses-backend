// aca me traere todos los modelos
const { Category , CategorySchema } = require('./category.model');
const { Expense , ExpenseSchema } = require('./expense.model');



function setupModels(sequelize) { // setupmodels recibe la conexion
    Category.init(CategorySchema , Category.config(sequelize));
    Expense.init(ExpenseSchema , Expense.config(sequelize));
    // init es un metodo static y viene heredado
    // inicializo con el schema y con la configuracion, 
    // como config es un metodo estatico no tengo que instanciar
}

module.exports = setupModels; // exporto solo la funcion