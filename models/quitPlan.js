const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class QuitPlan extends Model {}

QuitPlan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        howManyCigs: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        timeSmoking: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cigPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        whyQuit: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        triggers: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            refences: {
                model: "user",
                key: "id"
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'quit_plan',
    }
);

module.exports = QuitPlan;