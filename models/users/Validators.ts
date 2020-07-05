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
                fcmtoken:Joi.string().optional().allow(null),
                specialization:require('../specialization/Validators').default.db.update.validator.required(),
                gender:Joi.string().required().allow('','male','female'),
                details:Joi.object().required().keys({
                    city:Joi.string().required(),
                    nezam_pezeshki_code:Joi.string().required(),
                    monthlyCut:Joi.number().required(),
                    clinics:Joi.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    hospitals:Joi.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    response_days:Joi.object({
                        0: Joi.string().optional().allow(''),
                        1: Joi.string().optional().allow(''),
                        2: Joi.string().optional().allow(''),
                        3: Joi.string().optional().allow(''),
                        4: Joi.string().optional().allow(''),
                        5: Joi.string().optional().allow(''),
                        6: Joi.string().optional().allow(''),
                    }).required()
                }),
            }),
            Joi.object({
                gender:Joi.string().required().allow('','male','female'),
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
          fcmtoken:Joi.string().optional().allow(null),
          gender:Joi.string().required().allow('','male','female'),
          details:Joi.object().keys({
              city:Joi.string().required(),
              nezam_pezeshki_code:Joi.string().required(),
              monthlyCut:Joi.number().required(),
              clinics:Joi.array().items(Joi.any()).required(),
              hospitals:Joi.array().items(Joi.any()).required(),
              response_days:Joi.object({
                  0: Joi.string().optional().allow(''),
                  1: Joi.string().optional().allow(''),
                  2: Joi.string().optional().allow(''),
                  3: Joi.string().optional().allow(''),
                  4: Joi.string().optional().allow(''),
                  5: Joi.string().optional().allow(''),
                  6: Joi.string().optional().allow(''),
              }).required()
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
                  fcmtoken:Joi.string().optional().allow(null),
                  gender:Joi.string().required().allow('','male','female'),
                  specialization:require('../specialization/Validators').default.public.patch.validator.required(),
                  details:Joi.object().required().keys({
                      city:Joi.string().required(),
                      nezam_pezeshki_code:Joi.string().required(),
                      monthlyCut:Joi.number().required(),
                      clinics:Joi.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                      hospitals:Joi.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                      response_days:Joi.object({
                          0: Joi.string().optional().allow(''),
                          1: Joi.string().optional().allow(''),
                          2: Joi.string().optional().allow(''),
                          3: Joi.string().optional().allow(''),
                          4: Joi.string().optional().allow(''),
                          5: Joi.string().optional().allow(''),
                          6: Joi.string().optional().allow(''),
                      }).required()
                  }),
              }),
              Joi.object({
                  gender:Joi.string().optional().allow('','male','female'),
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
          fcmtoken:Joi.string().optional().allow(null),
          gender:Joi.string().required().allow('','male','female'),
          finalizable_visits: Joi.array().items(Joi.string()),
          details:Joi.object().optional().keys({
              city:Joi.string().required(),
              nezam_pezeshki_code:Joi.string().required(),
              monthlyCut:Joi.number().required(),
              clinics:Joi.array().items(require('../health_center/Validators').default.public.patch.validator.required()).required(),
              hospitals:Joi.array().items(require('../health_center/Validators').default.public.patch.validator.required()).required(),
              response_days:Joi.object({
                  0: Joi.string().optional().allow(''),
                  1: Joi.string().optional().allow(''),
                  2: Joi.string().optional().allow(''),
                  3: Joi.string().optional().allow(''),
                  4: Joi.string().optional().allow(''),
                  5: Joi.string().optional().allow(''),
                  6: Joi.string().optional().allow(''),
              }).required()
          })
      })
  },
    signin:createValidator({
        mobile:Joi.string().required()
    })
};

export default validator;

