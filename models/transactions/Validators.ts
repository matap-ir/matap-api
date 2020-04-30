import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import Transaction from './Transaction';

const validator : GeneratedValidator<Transaction> = {
    db:{
        insert:createValidator({
            amount:Joi.number().required(),
            type:Joi.string().required().allow('CHARGE_BY_GATEWAY' , 'CHARGE_BY_ADMIN' , 'STARTER_CHARGE' , 'VISIT_PAYMENT' , 'PAYROLL'),
            tracking_code:Joi.string().optional(),
            date:Joi.number().required(),
            hint:Joi.string().optional(),
            issuer:Joi.object({
                type:Joi.string().required().allow('admin','user'),
                id:Joi.string().required(),
                name:Joi.string().required()
            }),
            target:Joi.object({
                id:Joi.string().required(),
                name:Joi.string().required()
            })
        })
    },
    public:{
        post:createValidator({
            amount:Joi.number().required(),
            type:Joi.string().required().allow('CHARGE_BY_GATEWAY' , 'CHARGE_BY_ADMIN' , 'STARTER_CHARGE' , 'VISIT_PAYMENT' , 'PAYROLL'),
            tracking_code:Joi.string().optional(),
            hint:Joi.string().optional(),
        })
    }
};

export default validator;

