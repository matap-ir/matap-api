import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import Admin from './Admin';


const validator : GeneratedValidator<Admin> = {
  db:{
    insert:createValidator({
        name:Joi.string().required(),
        type:Joi.string().required().allow('MANAGER','ADMIN','HEALTHCENTER'),
        username:Joi.string().required(),
        password:Joi.string().required(),
        privileges:require('../privileges/Validators').default.db.insert.validator
    }),
      update:createValidator({
          _id:Joi.string().required(),
          name:Joi.string().required(),
          password:Joi.string().required(),
          privileges:require('../privileges/Validators').default.db.update.validator
      })
  },
  public:{
      post:createValidator({
          name:Joi.string().required(),
          type:Joi.string().required().allow('MANAGER','ADMIN','HEALTHCENTER'),
          username:Joi.string().required(),
          password:Joi.string().required(),
          privileges:require('../privileges/Validators').default.public.post.validator
      }),
      patch:createValidator({
          _id:Joi.string().required(),
          name:Joi.string().required(),
          password:Joi.string().required(),
          privileges:require('../privileges/Validators').default.public.patch.validator
      })
  },
    signin:createValidator({
        username:Joi.string().required(),
        password:Joi.string().required()
    })
};

export default validator;

