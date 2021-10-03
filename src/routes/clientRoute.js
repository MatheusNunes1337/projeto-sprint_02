const clientRoute = require('express').Router()
const ClientController = require('../controllers/ClientController')

clientRoute.post('/', ClientController.create)
clientRoute.get('/:id', ClientController.getById)
clientRoute.get('/name/:fullname', ClientController.getByFullname)
clientRoute.patch('/:id', ClientController.updateName)
clientRoute.delete('/:id', ClientController.delete)

module.exports = clientRoute