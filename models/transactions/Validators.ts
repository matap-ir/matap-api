import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import Transaction from './Transaction';


const validator : GeneratedValidator<Transaction> = {
    db:{
        insert:createValidator({
            amount:Joi.number().required(),
            type:Joi.string().required(),
            issuer:Joi.string().required(),
            tracking_code:Joi.string().required()
        })
    }
};

export default validator;

