import Joi from 'joi';

const general = Joi.alternatives().try(
    Joi.object().keys({
        type: Joi.string().required(),
        user: Joi.any().required()
    }),
    Joi.object().keys({
        type: Joi.string().required(),
        admin: Joi.any().required()
    })
);

export default {
    general
}
