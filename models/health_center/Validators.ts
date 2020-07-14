import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import HealthCenter from './HealthCenter';


const validator : GeneratedValidator<HealthCenter> = {
  db:{
    insert:createValidator({
        name:Joi.string().required(),
        address:Joi.string().optional(),
        wallpaperUrl:Joi.string().optional(),
        logoUrl:Joi.string().optional(),
        type: Joi.string().allow('HOSPITAL','CLINIC'),
        percentage: Joi.number().required().min(0).max(100)
    }),
      update:createValidator({
          _id:Joi.any().required(),
          name:Joi.string().required(),
          address:Joi.string().optional(),
          wallpaperUrl:Joi.string().optional(),
          logoUrl:Joi.string().optional(),
          type: Joi.string().allow('HOSPITAL','CLINIC').optional(),
          percentage: Joi.number().required().min(0).max(100)
      })
  },
  public:{
      post:createValidator({
          name:Joi.string().required(),
          address:Joi.string().required(),
          logoUrl:Joi.string().optional(),
          type: Joi.string().allow('HOSPITAL','CLINIC').required(),
          percentage: Joi.number().required().min(0).max(100)
      }),
      patch:createValidator({
          _id:Joi.any().required(),
          name:Joi.string().required(),
          address:Joi.string().optional(),
          wallpaperUrl:Joi.string().optional(),
          logoUrl:Joi.string().optional(),
          type: Joi.string().allow('HOSPITAL','CLINIC').optional(),
          percentage: Joi.number().required().min(0).max(100)
      })
  }
};

export default validator;

