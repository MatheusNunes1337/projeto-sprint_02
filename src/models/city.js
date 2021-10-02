const Sequelize = require('sequelize')
const instance = require('../database/index')

const columns = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'cities',
    timestamps: true
}

module.exports = instance.define('cities', columns, options)