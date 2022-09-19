import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import {ResponseTime} from '../../../index';

const general = createValidator({
    from:Joi.object().keys({
        hour:Joi.string().required(),
        minute:Joi.string().required(),
    }),
    to:Joi.object().keys({
        hour:Joi.string().required(),
        minute:Joi.string().required(),
    }),
    healthCenter:Joi.any().optional().allow(null),
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

