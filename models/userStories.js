const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserStories extends Model {}

UserStories.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        daysWithoutCigs: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        story: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_story',
    }
);

module.exports = UserStories;