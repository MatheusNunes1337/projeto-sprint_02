const replaceHyphenWithSpace = require('../utils/replaceHyphenWithSpace')

class ClientController {
    async create(req, res) {
        res.status(201).send()
    }

    async getByFullname(req, res) {
        const fullname = replaceHyphenWithSpace(req.params.fullname)
        res.status(200).send()
    }

    async getById(req, res) {
        res.status(200).send()
    }

    async updateName(req, res) {
        res.status(204).send()
    }

    async delete(req, res) {
        res.status(204).send()
    }
}

module.exports = new ClientController()