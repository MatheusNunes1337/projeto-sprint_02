const cityRoute = require('express').Router()
const CityController = require('../controllers/CityController')

cityRoute.post('/', CityController.create)
cityRoute.get('/:name', CityController.getByName)
cityRoute.get('/:state', CityController.getByState)

module.exports = cityRoute