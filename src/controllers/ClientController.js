const ClientService = require('../services/ClientService')

const replaceHyphenWithSpace = require('../utils/replaceHyphenWithSpace')
const NotFound = require('../errors/NotFound')
const checkClientGender = require('../validations/checkClientGender')
const { AgeFromDateString } = require('age-calculator')


class ClientController {
    async create(req, res, next) {
        try {
            const { gender, birthday } = req.body
            checkClientGender(gender)

            const age = new AgeFromDateString(birthday).age
            req.body.age = age
            
            const client = await ClientService.create(req.body)
            res.status(201).json(client)

        } catch(err) {
            next(err)
        }
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

    async updateName(req, res, next) {
        res.status(204).send()
    }

    async delete(req, res) {
        try {
            const clientId = req.params.id
            await ClientService.delete(clientId)
            res.status(204).end()
        } catch(err) {
            next(err)
        }
    }
}

module.exports = new ClientController()