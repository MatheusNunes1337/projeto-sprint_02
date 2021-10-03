const ClientService = require('../services/ClientService')

const replaceHyphenWithSpace = require('../utils/replaceHyphenWithSpace')
const NotFound = require('../errors/NotFound')

class ClientController {
    async create(req, res) {
        res.status(201).send()
    }

    async getByFullname(req, res, next) {
        try {
            const fullname = replaceHyphenWithSpace(req.params.fullname)
            const clients = await ClientService.getByFullname(fullname)
            if(clients.length === 0) {
                throw new NotFound('Client')
            }
            res.status(200).json(clients)
        } catch(err) {
            next(err)
        }
    }

    async getById(req, res, next) {
        try {
            const id = req.params.id
            const client = await ClientService.getById(id)
            if(!client) {
                throw new NotFound('Client')
            }
            res.status(200).json(client)
        } catch(err) {
            next(err)
        }
    }

    async updateName(req, res) {
        res.status(204).send()
    }

    async delete(req, res) {
        res.status(204).send()
    }
}

module.exports = new ClientController()