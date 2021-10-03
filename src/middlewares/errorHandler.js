const NotFound = require('../errors/NotFound')
const InvalidField = require('../errors/InvalidField')

const errorHandler = (err, req, res, next) => {
    let statusCode = 500

    if(err instanceof NotFound) 
        statusCode = 404
    if(err instanceof InvalidField)
        statusCode = 400
        
    res.status(statusCode).json({error: err.message})    
}

module.exports = errorHandler