const routes = require('express').Router()
const cityRoute = require('./cityRoute')

routes.use('/api/cities', cityRoute)

module.exports = routes