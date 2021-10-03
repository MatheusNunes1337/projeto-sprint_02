const ClientService = require('../services/ClientService')
const NotFound = require('../errors/NotFound')

const checkIfClientExists = async (req, res, next) => {
    try {
        const clientId = req.params.id

        const client = await ClientService.getById(clientId)
        if(!client) {
            throw new NotFound('Client')
        }
        next()
    } catch(err) {
        res.status(404).json(err.message)
    }
}

module.exports = checkIfClientExists