const yup = require('yup')

const citySchema = yup.object({
    name: yup.string().required().strict(),
    state: yup.string().required().strict()
})


module.exports = citySchema