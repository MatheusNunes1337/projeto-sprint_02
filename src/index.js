const express = require('express')
const routes = require('./routes')

const InvalidField = require('./errors/InvalidField')
const NotFound = require('./errors/NotFound')

const app = express()

app.use(express.json())

app.use(routes)

app.use((err, req, res, next) => {
    let statusCode = 500

    if(err instanceof NotFound) 
        statusCode = 404
    if(err instanceof InvalidField)
        statusCode = 400
        
    res.status(statusCode).json({error: err.message})    
})

module.exports = app