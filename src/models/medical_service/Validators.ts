import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import {MedicalService} from '../../../index';


const validator : GeneratedValidator<MedicalService> = {
  db:{
    insert:createValidator({
        logoUrl:Joi.string().optional().allow(null),
        title:Joi.string().required(),
        subTitle:Joi.string().required(),
        details:Joi.string().required(),
        price:Joi.number().required()
    }),
      update:createValidator({
          _id:Joi.any().required(),
          logoUrl:Joi.string().optional().allow(null),
          title:Joi.string().required(),
          subTitle:Joi.string().required(),
          details:Joi.string().required(),
          price:Joi.number().required()
      })
  },
  public:{
      post:createValidator({
          title:Joi.string().required(),
          subTitle:Joi.string().required(),
          details:Joi.string().required(),
          price:Joi.number().required()
      }),
      patch:createValidator({
          _id:Joi.any().required(),
          title:Joi.string().required(),
          subTitle:Joi.string().required(),
          details:Joi.string().required(),
          price:Joi.number().required()
      })
  }
};

export default validator;

