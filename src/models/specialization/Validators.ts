import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import Specialization from './Specialization';


const validator : GeneratedValidator<Specialization> = {
  db:{
    insert:createValidator({
        name:Joi.string().required(),
        parentSpecs: Joi.array().items(Joi.string()).required()
    }),
      update:createValidator({
          _id:Joi.any().required(),
          name:Joi.string().required(),
          parentSpecs: Joi.array().items(Joi.string()).required()
      })
  },
  public:{
      post:createValidator({
          name:Joi.string().required(),
          parentSpecs: Joi.array().items(Joi.string()).required()
      }),
      patch:createValidator({
          _id:Joi.any().required(),
          name:Joi.string().required(),
          parentSpecs: Joi.array().items(Joi.string()).required()
      })
  }
};

export default validator;

