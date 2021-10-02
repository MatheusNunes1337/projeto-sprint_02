const cityModel = require('../models/city')
const clientModel = require('../models/client')

class CreateTables {
    constructor(city, client) {
        this.models = [city, client]
    }

    async execute () {
        for(let i = 0; i < this.models.length; i++) {
            const model = this.models[i]
            await model.sync()
        }
    }
}

const createTables = new CreateTables(cityModel, clientModel)
createTables.execute()