import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import Rating from './Rating';

const validator : GeneratedValidator<Rating> = {
    db:{
        insert:createValidator({
            service_quality:Joi.number().required(),
            video_call_satisfaction:Joi.number().required(),
            doctor_details_clearity:Joi.number().required(),
            doctor_solutions:Joi.number().required(),
            doctor_detailed_consequences:Joi.number().required(),
            environment_details:Joi.number().required(),
        })
    },
    public:{
        post:createValidator({
            service_quality:Joi.number().required(),
            video_call_satisfaction:Joi.number().required(),
            doctor_details_clearity:Joi.number().required(),
            doctor_solutions:Joi.number().required(),
            doctor_detailed_consequences:Joi.number().required(),
            environment_details:Joi.number().required(),
        })
    }
};

export default validator;

