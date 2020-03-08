import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import User from './User';


const validator : GeneratedValidator<User> = {
  db:{
    insert:createValidator({
        mobile:phone(),
        type:Joi.string().required().allow('PATIENT','DOCTOR'),
        first_name:Joi.string().required(),
        last_name:Joi.string().required(),
        code:Joi.number().optional()
    }),
      update:createValidator({
          _id:Joi.string().required(),
          mobile:phone(),
          type:Joi.string().required().allow('PATIENT','DOCTOR'),
          first_name:Joi.string().required(),
          last_name:Joi.string().required(),
          code:Joi.number().optional(),
      })
  },
  public:{
      post:createValidator({
          mobile:phone(),
          first_name:Joi.string().required(),
          last_name:Joi.string().required()
      }),
      put:null,
      patch:null
  },
    signin:createValidator({
        mobile:Joi.string().required()
    })
};

export default validator;

