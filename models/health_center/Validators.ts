import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import HealthCenter from './HealthCenter';


const validator : GeneratedValidator<HealthCenter> = {
  db:{
    insert:createValidator({
        name:Joi.string().required(),
        address:Joi.string().optional(),
        logoUrl:Joi.string().optional(),
        type: Joi.string().allow('HOSPITAL','CLINIC')
    }),
      update:createValidator({
          _id:Joi.string().required(),
          name:Joi.string().required(),
          address:Joi.string().optional(),
          logoUrl:Joi.string().optional(),
          type: Joi.string().allow('HOSPITAL','CLINIC').optional()
      })
  },
  public:{
      post:createValidator({
          name:Joi.string().required(),
          address:Joi.string().required(),
          logoUrl:Joi.string().optional(),
          type: Joi.string().allow('HOSPITAL','CLINIC').required()
      }),
      patch:createValidator({
          _id:Joi.string().required(),
          name:Joi.string().required(),
          address:Joi.string().optional(),
          logoUrl:Joi.string().optional(),
          type: Joi.string().allow('HOSPITAL','CLINIC').optional()
      })
  }
};

export default validator;

