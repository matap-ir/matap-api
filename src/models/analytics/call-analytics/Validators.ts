import Joi from '../../Joi';
import {Schema} from 'mongoose';
import {GeneratedValidator} from '../../Validator';
import {AbstractCallMetric} from './CallAnalytics';
import createValidator from '../../createValidator';

const validator : GeneratedValidator<AbstractCallMetric<any>> = {
    db:{
        insert:createValidator({
            sessionId: Joi.string().required(),
            userId: Joi.string().required(),
            event: Joi.string().required(),
            data: Joi.any().optional().allow(null),
            timeStamp: Joi.number().required()
        }),
        update:createValidator({
            sessionId: Joi.string().required(),
            userId: Joi.string().required(),
            event: Joi.string().required(),
            data: Joi.any().optional().allow(null),
            timeStamp: Joi.number().required()
        })
    }
};

export default validator;

