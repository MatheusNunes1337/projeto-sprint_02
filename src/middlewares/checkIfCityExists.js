const CityService = require('../services/CityService')
const NotFound = require('../errors/NotFound')

const checkIfCityExists = async (req, res, next) => {
    try {
        const cityId = req.body.living_in

        const city = await CityService.getById(cityId)
        if(!city) {
            throw new NotFound('City')
        }
        next()
    } catch(err) {
        res.status(404).json(err.message)
    }
}

module.exports = checkIfCityExists