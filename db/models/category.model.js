const { Model , DataTypes } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
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
    }
}

class Category extends Model {
    static associate (models) {
        this.hasMany(models.Expense , {
            as: 'expense',
            foreignKey: 'categoryId'
        })
    }
    static config (sequelize) {
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: false
        }
    }
}

module.exports = { CATEGORY_TABLE , CategorySchema , Category }