import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import {MedicalService} from '../../index';


const validator : GeneratedValidator<MedicalService> = {
  db:{
    insert:createValidator({
        age:Joi.number().required(),
        mobile:Joi.string().required(),
        gender:Joi.string().required().allow(['male','female']),
        details:Joi.string().required(),
    }),
      update:createValidator({
          _id:Joi.any().required(),
          mobile:Joi.string().required(),
          gender:Joi.string().required().allow(['male','female']),
          details:Joi.string().required(),
      })
  },
  public:{
      post:createValidator({
          age:Joi.number().required(),
          mobile:Joi.string().required(),
          gender:Joi.string().required().allow(['male','female']),
          details:Joi.string().required(),
      }),
      patch:createValidator({
          _id:Joi.any().required(),
          age:Joi.number().required(),
          mobile:Joi.string().required(),
          gender:Joi.string().required().allow(['male','female']),
          details:Joi.string().required(),
      })
  }
};

export default validator;
