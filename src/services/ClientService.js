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

    async delete(id) {
        return clientModel.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new ClientService()