const { Sequelize } = require('sequelize');
const { config } = require('../config/config.js');
const setupModels = require('../db/models'); // buscara el index

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword); // con esto protejo esta informacion
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; // en una db remota, tenes una url de conexion directa

const sequelize = new Sequelize(URI , {
    dialect: 'postgres', // me conecto a postgres con las credenciales que le di
    logging: true, // veré los resultados de cada consulta en consola
});

setupModels(sequelize); // se corre justo despues de generar la instancia de sequelize.
// le mando la conexion que acabo de iniciar.
sequelize.sync(); // tomar los modelos y crear la estructura.
// va a leer el modelo que le dimos. con el schema va a crear la tabla.

module.exports = sequelize;