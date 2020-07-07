import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import {ResponseTime} from '../../index';

const general = createValidator({
    from:Joi.object().keys({
        hour:Joi.string().required(),
        minute:Joi.string().required(),
    }).required(),
    to:Joi.object().keys({
        hour:Joi.string().required(),
        minute:Joi.string().required(),
    }).required(),
    healthCenter:Joi.string().optional().allow(null),
})

const validator : GeneratedValidator<ResponseTime> = {
    db:{
        insert:general,
        update:general
    },
    public:{
        post:general,
        patch:general
    }
};

export default validator;

