import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import User from './User';


const validator : GeneratedValidator<User> = {
  db:{
    insert:createValidator({
        mobile:phone(),
        type:Joi.string().required().allow('PATIENT','DOCTOR'),
        name:Joi.string().required(),
        code:Joi.number().optional(),
        specialization:Joi.string().optional()
    }),
      update:createValidator({
          _id:Joi.string().required(),
          mobile:phone(),
          type:Joi.string().required().allow('PATIENT','DOCTOR'),
          name:Joi.string().required(),
          code:Joi.number().optional(),
          imageUrl:Joi.string().optional(),
          specialization:Joi.string().optional()
      })
  },
  public:{
      post:createValidator({
          mobile:phone(),
          name:Joi.string().required()
      }),
      put:null,
      patch:null
  },
    signin:createValidator({
        mobile:Joi.string().required()
    })
};

export default validator;

