import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import HealthCenter from './HealthCenter';


const validator : GeneratedValidator<HealthCenter> = {
  db:{
    insert:createValidator({
        name:Joi.string().required(),
        address:Joi.string().optional(),
        logoUrl:Joi.string().optional()
    }),
      update:createValidator({
          _id:Joi.string().required(),
          name:Joi.string().required(),
          address:Joi.string().optional(),
          logoUrl:Joi.string().optional()
      })
  },
  public:{
      post:createValidator({
          name:Joi.string().required(),
          address:Joi.string().optional(),
          logoUrl:Joi.string().optional()
      }),
      patch:createValidator({
          _id:Joi.string().required(),
          name:Joi.string().required(),
          address:Joi.string().optional(),
          logoUrl:Joi.string().optional()
      })
  }
};

export default validator;

