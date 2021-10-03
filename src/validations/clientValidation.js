const yup = require('yup')

const createClientSchema = yup.object({
    fullname: yup.string().required().strict(),
    gender: yup.string().required().strict(),
    birthday: yup.date().required().strict(),
    living_in: yup.number().required().strict()
})

const updateClientNameSchema = yup.object({
    fullname: yup.string().required().strict()
})


module.exports = { createClientSchema, updateClientNameSchema }