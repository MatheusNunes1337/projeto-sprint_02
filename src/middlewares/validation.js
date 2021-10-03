function validation(schema) {
    return async (req, res, next) => {
        try {
            const data = req.body
            await schema.validate(data)
            next()
            return next()
        } catch(err) {
            res.status(400).json(err.message)
        }
    }
}

module.exports = validation