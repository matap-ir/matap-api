import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import {MedicalService} from '../../index';


const validator : GeneratedValidator<MedicalService> = {
    db:{
        insert:createValidator({
            title:Joi.string().optional(),
            body:Joi.string().required(),
            success:Joi.number().required(),
            fails:Joi.number().required(),
            date:Joi.number().required(),
            sender:Joi.any().required()
        }),
        update:createValidator({
            success:Joi.number().required(),
            fails:Joi.number().required()
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

