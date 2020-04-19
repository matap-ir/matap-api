import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import Specialization from './Specialization';


const validator : GeneratedValidator<Specialization> = {
  db:{
    insert:createValidator({
        name:Joi.string().required(),
    }),
      update:createValidator({
          _id:Joi.string().required(),
          name:Joi.string().required(),
      })
  },
  public:{
      post:createValidator({
          name:Joi.string().required()
      }),
      patch:createValidator({
          _id:Joi.string().required(),
          name:Joi.string().required()
      })
  }
};

export default validator;

