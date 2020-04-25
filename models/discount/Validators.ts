import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import Discount from './Discount';


const validator : GeneratedValidator<Discount> = {
    db:{
        insert:createValidator({
            title:Joi.string().required(),
            code:Joi.string().required(),
            amount:Joi.number().required(),
            end_date:Joi.number().required(),
            per_user_limit:Joi.number().required(),
            total_usage_limit:Joi.number().required(),
        }),
        update:createValidator({
            _id:Joi.string().required(),
            title:Joi.string().required(),
            code:Joi.string().required(),
            amount:Joi.number().required(),
            end_date:Joi.number().required(),
            per_user_limit:Joi.number().required(),
            total_usage_limit:Joi.number().required(),
            usages:Joi.array().items(Joi.object({
                userId: Joi.string().required(),
                roomId: Joi.string().required()
            }))
        })
    },
    public:{
        post:createValidator({
            title:Joi.string().required(),
            code:Joi.string().required(),
            amount:Joi.number().required(),
            end_date:Joi.number().required(),
            per_user_limit:Joi.number().required(),
        }),
        put: createValidator({
            _id:Joi.string().required(),
            title:Joi.string().required(),
            code:Joi.string().required(),
            amount:Joi.number().required(),
            end_date:Joi.number().required(),
            per_user_limit:Joi.number().required(),
            total_usage_limit:Joi.number().required()
        }),
        patch:createValidator({
            _id:Joi.string().required(),
            title:Joi.string().required(),
            code:Joi.string().required(),
            amount:Joi.number().required(),
            end_date:Joi.number().required(),
            per_user_limit:Joi.number().required(),
            total_usage_limit:Joi.number().required()
        })
    }
};

export default validator;

