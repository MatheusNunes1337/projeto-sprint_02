const clientModel = require('../models/client')

class ClientService {
    async getByFullname(fullname) {
        return clientModel.findAll({
            where: {
                fullname: fullname
            },
            raw: true
        })
    }
    
    async getById(id) {
        return clientModel.findOne({
            where: {
                id: id
            }
        })
    }

    async create(client) {
        return clientModel.create(client)
    }
}

module.exports = new ClientService()