const cityRoute = require('express').Router()
const CityController = require('../controllers/CityController')

cityRoute.post('/', CityController.create)
cityRoute.get('/name/:name', CityController.getByName)
cityRoute.get('/state/:state', CityController.getByState)

module.exports = cityRoute