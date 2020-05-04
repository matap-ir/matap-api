import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import User from './User';


const validator : GeneratedValidator<User> = {
  db:{
    insert:{
        validator:Joi.alternatives().try(
            Joi.object({
                mobile:phone().required(),
                name:Joi.string().required(),
                type:Joi.string().required().allow('DOCTOR'),
                code:Joi.number().required(),
                price:Joi.number().required(),
                specialization:require('../specialization/Validators').default.db.update.validator.required(),
                details:Joi.object().required().keys({
                    city:Joi.string().required(),
                    nezam_pezeshki_code:Joi.string().required(),
                    monthlyCut:Joi.number().required(),
                    clinics:Joi.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    hospitals:Joi.array().items(require('../health_center/Validators').default.db.update.validator).required()
                }),
            }),
            Joi.object({
                mobile:phone().required(),
                name:Joi.string().required(),
                type:Joi.string().required().allow('PATIENT'),
                currency: Joi.number().optional(),
            })
        )
    },
      update:createValidator({
          _id:Joi.any().required(),
          mobile:phone(),
          type:Joi.string().required().allow('PATIENT','DOCTOR'),
          name:Joi.string().required(),
          code:Joi.number().optional(),
          imageUrl:Joi.string().optional(),
          price:Joi.number().required(),
          specialization:Joi.any().required(),
          currency: Joi.number().optional(),
          sms_code:Joi.number().optional().allow(null),
          details:Joi.object().keys({
              city:Joi.string().required(),
              nezam_pezeshki_code:Joi.string().required(),
              monthlyCut:Joi.number().required(),
              clinics:Joi.array().items(Joi.any()).required(),
              hospitals:Joi.array().items(Joi.any()).required()
          })
      })
  },
  public:{
      post:{
          validator:Joi.alternatives().try(
              Joi.object({
                  mobile:phone().required(),
                  name:Joi.string().required(),
                  type:Joi.string().required().allow('DOCTOR'),
                  code:Joi.number().required(),
                  price:Joi.number().required(),
                  specialization:require('../specialization/Validators').default.public.patch.validator.required(),
                  details:Joi.object().required().keys({
                      city:Joi.string().required(),
                      nezam_pezeshki_code:Joi.string().required(),
                      monthlyCut:Joi.number().required(),
                      clinics:Joi.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                      hospitals:Joi.array().items(require('../health_center/Validators').default.db.update.validator).required()
                  }),
              }),
              Joi.object({
                  mobile:phone().required(),
                  name:Joi.string().required(),
                  type:Joi.string().required().allow('PATIENT'),
                  currency: Joi.number().optional(),
              })
          )
      },
      patch:createValidator({
          _id:Joi.any().required(),
          mobile:phone(),
          type:Joi.string().required().allow('PATIENT','DOCTOR'),
          name:Joi.string().required(),
          code:Joi.number().optional(),
          imageUrl:Joi.string().optional(),
          price:Joi.number().optional(),
          specialization:require('../specialization/Validators').default.public.patch.validator.optional(),
          currency: Joi.number().optional(),
          details:Joi.object().optional().keys({
              city:Joi.string().required(),
              nezam_pezeshki_code:Joi.string().required(),
              monthlyCut:Joi.number().required(),
              clinics:Joi.array().items(require('../health_center/Validators').default.public.patch.validator.required()).required(),
              hospitals:Joi.array().items(require('../health_center/Validators').default.public.patch.validator.required()).required()
          })
      })
  },
    signin:createValidator({
        mobile:Joi.string().required()
    })
};

export default validator;

