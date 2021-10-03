const routes = require('express').Router()
const cityRoute = require('./cityRoute')
const clientRoute = require('./clientRoute')

routes.use('/api/cities', cityRoute)
routes.use('/api/clients', clientRoute)

module.exports = routes