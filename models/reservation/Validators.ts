import Joi from '../Joi';
import createValidator from '../createValidator';

const request = {
    _id: Joi.any().required(),
    type: Joi.string().required(),
    message: Joi.string().optional().allow(null),
    date: Joi.number().required(),
    extras: Joi.object().keys({
        for: Joi.string().allow('self','other'),
        name: Joi.string().required(),
        mobile: Joi.string().required(),
        age: Joi.number().required(),
        gender:Joi.string().required().allow('male','female'),
        nationalCode: Joi.string().required(),
        attendReason: Joi.string().required().allow('')
    }).required(),
    selection: Joi.array().items(
        Joi.object().keys({
            from: Joi.number().required(),
            to: Joi.number().required()
        })
    ).required(),
    rejection: Joi.object().keys({
        reason: Joi.string().required().allow('')
    }).optional().allow(null)
};

const general = {
    _id: Joi.any().required(),
    requestDate: Joi.number().required(),
    issuer: Joi.any().required(),
    doctor: Joi.any().required(),
    state: Joi.string().required(),
    type: Joi.string().required(),
    trackingCode: Joi.string().required(),
    due:Joi.object().keys({
        date:Joi.object().keys({
            from: Joi.number().required(),
            to: Joi.number().required()
        }).required(),
        message: Joi.string().optional().allow(null)
    }).optional(),
    info: Joi.any().required(),
    tag: Joi.string().required()
};

export default {
    general: createValidator(general),
    public:{
        post: createValidator(general),
        patch: createValidator(general)
    },
    db:{
        insert: createValidator({
            ...general,
            _id: null
        }),
        update: createValidator(general)
    },
    request:{
        public:{
            post:createValidator({
                ...request,
                type: null,
                rejection: null,
                date: null,
                _id: null
            })
        }
    }
};
