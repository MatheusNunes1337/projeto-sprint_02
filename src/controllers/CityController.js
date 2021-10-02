const NotFound = require('../errors/NotFound')
const CityService = require('../services/CityService')

class CityController {

    async create(req, res) {
        return res.status(201).send()
    }
     
    async getByName(req, res, next) {
        try {
            const cityName = req.params.name
            const cities = await CityService.getByName(cityName)
            if(cities.length === 0) {
                throw new NotFound('city')
            }

            res.status(200).json(cities) 
        } catch(err) {
            next(err)
        }
    }

    async getByState(req, res) {
        return res.status(200).send()
    }
}

module.exports = new CityController()