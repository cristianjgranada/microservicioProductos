const Joi = require('@hapi/joi')


module.exports = Joi.object().keys({
    productoid: Joi.string().required()
    ,nombre: Joi.string().required()
    ,precio:  Joi.number().required().min(0)
    ,cantidad: Joi.number().required().min(0)
    ,urlimagen:  Joi.string().allow(null)
})