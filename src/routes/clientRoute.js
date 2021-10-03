const clientRoute = require('express').Router()
const ClientController = require('../controllers/ClientController')

const validation = require('../middlewares/validation')
const { createClientSchema } = require('../validations/clientValidation')
const checkIfCityExists = require('../middlewares/checkIfCityExists')
const checkIfClientExists = require('../middlewares/checkIfClientExists')

clientRoute.post('/', validation(createClientSchema), checkIfCityExists, ClientController.create)
clientRoute.get('/:id', ClientController.getById)
clientRoute.get('/name/:fullname', ClientController.getByFullname)
clientRoute.patch('/:id', ClientController.updateName)
clientRoute.delete('/:id', checkIfClientExists, ClientController.delete)

module.exports = clientRoute