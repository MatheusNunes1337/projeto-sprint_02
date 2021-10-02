const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()

const instance = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASS,
    {
        host: process.env.HOST,
        dialect: 'mysql'
    }
)

module.exports = instance