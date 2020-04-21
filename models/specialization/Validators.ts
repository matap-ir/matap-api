import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import Specialization from './Specialization';


const validator : GeneratedValidator<Specialization> = {
  db:{
    insert:createValidator({
        name:Joi.string().required(),
        price:Joi.number().required(),
        monthlyCut:Joi.number().required(),
        doctorCut:Joi.number().required()
    }),
      update:createValidator({
          _id:Joi.any().required(),
          name:Joi.string().required(),
          price:Joi.number().required(),
          monthlyCut:Joi.number().required(),
          doctorCut:Joi.number().required()
      })
  },
  public:{
      post:createValidator({
          name:Joi.string().required(),
          price:Joi.number().required(),
          monthlyCut:Joi.number().required(),
          doctorCut:Joi.number().required()
      }),
      patch:createValidator({
          _id:Joi.any().required(),
          name:Joi.string().required(),
          price:Joi.number().required(),
          monthlyCut:Joi.number().required(),
          doctorCut:Joi.number().required()
      })
  }
};

export default validator;

