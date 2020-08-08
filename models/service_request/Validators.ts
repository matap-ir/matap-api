import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import {MedicalService} from '../../index';


const validator : GeneratedValidator<MedicalService> = {
  db:{
    insert:createValidator({
        age:Joi.number().required(),
        service: Joi.string().required(),
        mobile:Joi.string().required(),
        request_date: Joi.number().required(),
        gender:Joi.string().required().allow('male','female'),
        details:Joi.string().required(),
        trackingCode:Joi.string().required(),
        status:Joi.string().required(),
        price:Joi.number().optional().allow(null),
        requester:Joi.any().required()
    }),
      update:createValidator({
          _id:Joi.any().required(),
          mobile:Joi.string().required(),
          gender:Joi.string().required().allow('male','female'),
          details:Joi.string().required(),
          trackingCode:Joi.string().required(),
          status:Joi.string().required(),
          price:Joi.number().optional().allow(null),
          requester:Joi.any().required()
      })
  },
  public:{
      post:createValidator({
          age:Joi.number().required(),
          service: Joi.string().required(),
          mobile:Joi.string().required(),
          gender:Joi.string().required().allow('male','female'),
          details:Joi.string().required()
      }),
      patch:createValidator({
          _id:Joi.any().required(),
          age:Joi.number().required(),
          mobile:Joi.string().required(),
          gender:Joi.string().required().allow('male','female'),
          details:Joi.string().required(),
          status:Joi.string().required(),
          price:Joi.number().optional().allow(null)
      })
  }
};

export default validator;

