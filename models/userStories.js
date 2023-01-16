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
            defaultValue: DataTypes.fn('NOW')
        },
        story: {
            type: DataTypes.STRING,
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