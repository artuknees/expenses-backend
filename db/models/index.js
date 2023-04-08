// aca me traere todos los modelos
// const { User , UserSchema } = require('./user.model');
// const { Order , OrderSchema } = require('./order.model');
const { Product , ProductSchema } = require('./product.model');
// const { Category , CategorySchema } = require('./category.model');



function setupModels(sequelize) { // setupmodels recibe la conexion
    // User.init(UserSchema , User.config(sequelize));
    // Order.init(OrderSchema , Order.config(sequelize));
    Product.init(ProductSchema , Product.config(sequelize));
    // Category.init(CategorySchema , Category.config(sequelize));
    // init es un metodo static y viene heredado
    // inicializo con el schema y con la configuracion, 
    // como config es un metodo estatico no tengo que instanciar
}

module.exports = setupModels; // exporto solo la funcion