import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import createValidator from '../createValidator';
import IssuerValidator from '../issuer/Validators';

const request = {
    _id: Joi.any().required(),
    type: Joi.string().required(),
    message: Joi.string().required().allow(''),
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

const offer = {
    _id: Joi.any().required(),
    type: Joi.string().required(),
    message: Joi.string().required().allow(''),
    date: Joi.number().required(),
    offers: Joi.array().items(
        Joi.object().keys({
            from: Joi.number().required(),
            to: Joi.number().required()
        })
    ).required(),
    rejection: Joi.object().keys({
        reason: Joi.string().required().allow('')
    }).optional()
};

const cancellation = {
    _id: Joi.any().required(),
    type: Joi.string().required(),
    date: Joi.number().required(),
    cancellerId: Joi.any().required(),
    reason: Joi.string().required().allow('')
};

const general = {
    _id: Joi.any().required(),
    requestDate: Joi.number().required(),
    issuer: Joi.any().required(),
    doctor: Joi.any().required(),
    state: Joi.string().required(),
    timeLine: Joi.array().items(Joi.any()).required(),
    trackingCode: Joi.string().required(),
    due:Joi.object().keys({
        date:Joi.object().keys({
            from: Joi.number().required(),
            to: Joi.number().required()
        }).required(),
        message: Joi.string().required().allow('')
    }).optional(),
    type: Joi.string().required(),
    otherInfos: Joi.any().optional().allow(null)
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
    offer:{
        public:{
            post:createValidator({
                ...offer,
                type: null,
                rejection: null,
                date: null,
                _id: null
            })
        }
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
    },
    cancellation:{
        public:{
            post:createValidator({
                ...cancellation,
                _id: null,
                cancellerId: null,
                message: null
            })
        }
    }
};
