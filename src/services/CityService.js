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


}

module.exports = new CityService()