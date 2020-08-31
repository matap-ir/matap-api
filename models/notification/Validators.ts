import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import {MedicalService} from '../../index';


const validator : GeneratedValidator<MedicalService> = {
    db:{
        insert:createValidator({
            title:Joi.string().optional(),
            body:Joi.string().required(),
            successCount:Joi.number().required(),
            fails:Joi.number().required(),
            date:Joi.number().required(),
            sender:Joi.any().required(),
            state:Joi.string().required()
        }),
        update:createValidator({
            successCount:Joi.number().required(),
            fails:Joi.number().required(),
            state:Joi.string().required()
        })
    },
    public:{
        post:createValidator({
            title:Joi.string().optional(),
            body:Joi.string().required()
        }),
        patch:createValidator({

        })
    }
};

export default validator;

