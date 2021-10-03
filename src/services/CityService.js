const cityModel = require('../models/city')

class CityService {
    async getByName(name) {
        return cityModel.findAll({
            where: {
                name: name
            },
            raw: true
        })
    }

    async getByState(state) {
        return cityModel.findAll({
            where: {
                state: state
            },
            raw: true
        })
    }

    async create(city) {
        return cityModel.create(city)
    }


}

module.exports = new CityService()