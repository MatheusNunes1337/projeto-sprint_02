class NotFound extends Error {
    constructor(name) {
        super(`${name} not found`)
        this.name = 'Not Found'
        this.idErro = 0
    }
}

module.exports = NotFound