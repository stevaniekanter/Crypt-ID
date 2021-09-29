const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PostTag extends Model {}

PostTag.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id'
        }
    },
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tag',
            key: 'id'
        }
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'post_tag',
    }
    );

module.exports = PostTag;
