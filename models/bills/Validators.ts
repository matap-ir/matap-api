import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import Receipt from './Receipt';


const validator : GeneratedValidator<Receipt> = {
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

