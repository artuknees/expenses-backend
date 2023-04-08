const { Model , DataTypes , Sequelize } = require('sequelize');

// pongo el nombre de la tabla que decido dar
const PRODUCT_TABLE = 'products';

// le digo que schema quiero que cree en la DB. Define la estructura de la DB
const ProductSchema = {
    id: { // aca digo como va a ser el campo "id"
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    // details: {
    //     allowNull: false,
    //     type: DataTypes.STRING
    // },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
    },
}

class Product extends Model { // extiendo desde Model y me traigo sus atributos
    // aca van los metodos. son estaticos -> no necesito declarar el objeto para acceder
    static associate () {
        // aca diremos las relaciones
    }
    static config (sequelize) {
        return { // exporto la configuración
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = { PRODUCT_TABLE , ProductSchema , Product }