const Sequelize = require('sequelize');
const sequelize = require('../../config/db.config');

const UserSchema = sequelize.define('users', {
    user_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = UserSchema;