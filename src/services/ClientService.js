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
}

module.exports = new ClientService()