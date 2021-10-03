const NotFound = require('../errors/NotFound')
const CityService = require('../services/CityService')

const replaceHyphenWithSpace = require('../utils/replaceHyphenWithSpace')

class CityController {

    async create(req, res) {
        return res.status(201).send()
    }
     
    async getByName(req, res, next) {
        try {
            const cityName = replaceHyphenWithSpace(req.params.name)
            console.log(cityName)
            const cities = await CityService.getByName(cityName)
            if(cities.length === 0) {
                throw new NotFound('City')
            }

            res.status(200).json(cities) 
        } catch(err) {
            next(err)
        }
    }

    async getByState(req, res, next) {
        try {
            const stateName = req.params.state
            const cities = await CityService.getByState(stateName)
            if(cities.length === 0) {
                throw new NotFound('City')
            }

            res.status(200).json(cities) 
        } catch(err) {
            next(err)
        }
    }
}

module.exports = new CityController()