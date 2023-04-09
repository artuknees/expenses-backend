const { Model , DataTypes , Sequelize } = require('sequelize');

const { CATEGORY_TABLE } = require('./category.model')

const EXPENSE_TABLE = 'expenses';

const ExpenseSchema = {
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
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // date: {
    //     type: DataTypes.TIME,
    //     allowNull: false,
    // },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    categoryId:{
        field:'category_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CATEGORY_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Expense extends Model { // extiendo desde Model y me traigo sus atributos
    // aca van los metodos. son estaticos -> no necesito declarar el objeto para acceder
    static associate (models) {
        this.belongsTo(models.Category , {
            as: 'category'
        })
    }
    static config (sequelize) {
        return { // exporto la configuración
            sequelize,
            tableName: EXPENSE_TABLE,
            modelName: 'Expense',
            timestamps: false
        }
    }
}

module.exports = { EXPENSE_TABLE , ExpenseSchema , Expense }