const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DailyForm extends Model {}

DailyForm.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.fn('NOW')
        },
        howManyCigs: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cravings: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        mood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        triggers: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'daily_form',
    }
);

module.exports = DailyForm;