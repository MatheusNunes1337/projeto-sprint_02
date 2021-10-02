const Sequelize = require('sequelize')
const instance = require('../database/index')

const columns = {
    fullname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM('male', 'female', 'other', 'I prefer not to say'),
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    living_in: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('./city'),
            key: 'id'
        }
    }
}

const options = {
    freezeTableName: true,
    tableName: 'clients',
    timestamps: true
}

module.exports = instance.define('clients', columns, options)