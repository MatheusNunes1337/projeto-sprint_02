const cityRoute = require('express').Router()
const CityController = require('../controllers/CityController')

const validation = require('../middlewares/validation')
const citySchema = require('../validations/cityValidation')

cityRoute.post('/', validation(citySchema), CityController.create)
cityRoute.get('/name/:name', CityController.getByName)
cityRoute.get('/state/:state', CityController.getByState)

module.exports = cityRoute