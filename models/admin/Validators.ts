import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import Admin from './Admin';


const validator : GeneratedValidator<Admin> = {
  db:{
    insert:createValidator({
        name:Joi.string().required(),
        type:Joi.string().required().allow(['MANAGER','ADMIN']),
        username:Joi.string().required(),
        password:Joi.string().required(),
        accesses:Joi.array().items(Joi.string()).optional(),
    }),
      update:createValidator({
          _id:Joi.string().required(),
          name:Joi.string().required(),
          password:Joi.string().required(),
          accesses:Joi.array().items(Joi.string()).optional(),
      })
  },
  public:{
      post:createValidator({
          name:Joi.string().required(),
          type:Joi.string().required().allow(['MANAGER','ADMIN']),
          username:Joi.string().required(),
          password:Joi.string().required(),
          accesses:Joi.array().items(Joi.string()).optional(),
      }),
      patch:createValidator({
          _id:Joi.string().required(),
          name:Joi.string().required(),
          password:Joi.string().required(),
          accesses:Joi.array().items(Joi.string()).optional(),
      })
  },
    signin:createValidator({
        username:Joi.string().required(),
        password:Joi.string().required()
    })
};

export default validator;

