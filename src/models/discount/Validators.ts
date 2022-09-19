import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import DiscountCoupon from './DiscountCoupon';


const validator : GeneratedValidator<DiscountCoupon> = {
    db:{
        insert:createValidator({
            title:Joi.string().required(),
            code:Joi.string().required(),
            amount:Joi.number().required(),
            end_date:Joi.number().required(),
            per_user_limit:Joi.number().required(),
            total_usage_limit:Joi.number().required(),
            start_date: Joi.number().required()
        }),
        update:createValidator({
            _id:Joi.string().required(),
            title:Joi.string().required(),
            code:Joi.string().required(),
            amount:Joi.number().required(),
            end_date:Joi.number().required(),
            per_user_limit:Joi.number().required(),
            total_usage_limit:Joi.number().required(),
            usages:Joi.array().items(Joi.string())
        })
    },
    public:{
        post:createValidator({
            title:Joi.string().required(),
            code:Joi.string().required(),
            amount:Joi.number().required(),
            end_date:Joi.number().required(),
            per_user_limit:Joi.number().required(),
            start_date: Joi.number().required(),
            total_usage_limit:Joi.number().required()
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

