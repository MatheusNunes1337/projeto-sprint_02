
class CityController {

    async create(req, res) {
        return res.status(201).send()
    }
     
    async getByName(req, res) {
        return res.status(200).send()
    }

    async getByState(req, res) {
        return res.status(200).send()
    }
}

module.exports = CityController