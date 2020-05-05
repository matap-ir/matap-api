import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import Transaction from './Transaction';

const validator : GeneratedValidator<Transaction> = {
    db:{
        insert:createValidator({
            amount:Joi.number().required(),
            type:Joi.string().required().allow('CHARGE_BY_GATEWAY' , 'CHARGE_BY_ADMIN' , 'STARTER_CHARGE' , 'VISIT_PAYMENT' , 'PAYROLL' , 'RETURN_VISIT_PAYMENT'),
            tracking_code:Joi.string().optional().allow('').allow(null),
            date:Joi.number().required(),
            hint:Joi.string().optional().allow('').allow(null),
            visit_id:Joi.any().optional().allow(null),
            issuer:Joi.object({
                type:Joi.string().required().allow('admin','user'),
                _id:Joi.any().required(),
                name:Joi.string().required()
            }),
            target:Joi.object({
                _id:Joi.any().required(),
                name:Joi.string().required()
            })
        })
    },
    public:{
        post:createValidator({
            amount:Joi.number().required(),
            type:Joi.string().required().allow('CHARGE_BY_GATEWAY' , 'CHARGE_BY_ADMIN' , 'STARTER_CHARGE' , 'VISIT_PAYMENT' , 'PAYROLL'),
            tracking_code:Joi.string().optional().allow('').allow(null),
            hint:Joi.string().optional().allow('').allow(null),
        })
    }
};

export default validator;

