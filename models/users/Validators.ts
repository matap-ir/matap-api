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
                gender:Joi.string().optional().allow('','male','female'),
                details:Joi.object().required().keys({
                    city:Joi.string().required(),
                    nezam_pezeshki_code:Joi.string().required(),
                    cut:Joi.number().required(),
                    clinics:Joi.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    hospitals:Joi.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    response_days:Joi.object({
                        0: Joi.array().items(require('../response_time/Validators').default.db.insert.validator),
                        1: Joi.array().items(require('../response_time/Validators').default.db.insert.validator),
                        2: Joi.array().items(require('../response_time/Validators').default.db.insert.validator),
                        3: Joi.array().items(require('../response_time/Validators').default.db.insert.validator),
                        4: Joi.array().items(require('../response_time/Validators').default.db.insert.validator),
                        5: Joi.array().items(require('../response_time/Validators').default.db.insert.validator),
                        6: Joi.array().items(require('../response_time/Validators').default.db.insert.validator),
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
          gender:Joi.string().optional().allow('','male','female'),
          details:Joi.object().keys({
              city:Joi.string().required(),
              nezam_pezeshki_code:Joi.string().required(),
              cut:Joi.number().required(),
              clinics:Joi.array().items(Joi.any()).required(),
              hospitals:Joi.array().items(Joi.any()).required(),
              response_days:Joi.object({
                  0: Joi.array().items(require('../response_time/Validators').default.db.update.validator),
                  1: Joi.array().items(require('../response_time/Validators').default.db.update.validator),
                  2: Joi.array().items(require('../response_time/Validators').default.db.update.validator),
                  3: Joi.array().items(require('../response_time/Validators').default.db.update.validator),
                  4: Joi.array().items(require('../response_time/Validators').default.db.update.validator),
                  5: Joi.array().items(require('../response_time/Validators').default.db.update.validator),
                  6: Joi.array().items(require('../response_time/Validators').default.db.update.validator),
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
                  gender:Joi.string().optional().allow('','male','female'),
                  specialization:require('../specialization/Validators').default.public.patch.validator.required(),
                  details:Joi.object().required().keys({
                      city:Joi.string().required(),
                      nezam_pezeshki_code:Joi.string().required(),
                      cut:Joi.number().required(),
                      clinics:Joi.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                      hospitals:Joi.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                      response_days:Joi.object({
                          0: Joi.array().items(require('../response_time/Validators').default.public.post.validator),
                          1: Joi.array().items(require('../response_time/Validators').default.public.post.validator),
                          2: Joi.array().items(require('../response_time/Validators').default.public.post.validator),
                          3: Joi.array().items(require('../response_time/Validators').default.public.post.validator),
                          4: Joi.array().items(require('../response_time/Validators').default.public.post.validator),
                          5: Joi.array().items(require('../response_time/Validators').default.public.post.validator),
                          6: Joi.array().items(require('../response_time/Validators').default.public.post.validator),
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
          gender:Joi.string().optional().allow('','male','female'),
          finalizable_visits: Joi.array().items(Joi.string()),
          details:Joi.object().optional().keys({
              city:Joi.string().required(),
              nezam_pezeshki_code:Joi.string().required(),
              cut:Joi.number().required(),
              clinics:Joi.array().items(require('../health_center/Validators').default.public.patch.validator.required()).required(),
              hospitals:Joi.array().items(require('../health_center/Validators').default.public.patch.validator.required()).required(),
              response_days:Joi.object({
                  0: Joi.array().items(require('../response_time/Validators').default.public.patch.validator),
                  1: Joi.array().items(require('../response_time/Validators').default.public.patch.validator),
                  2: Joi.array().items(require('../response_time/Validators').default.public.patch.validator),
                  3: Joi.array().items(require('../response_time/Validators').default.public.patch.validator),
                  4: Joi.array().items(require('../response_time/Validators').default.public.patch.validator),
                  5: Joi.array().items(require('../response_time/Validators').default.public.patch.validator),
                  6: Joi.array().items(require('../response_time/Validators').default.public.patch.validator),
              }).required()
          })
      })
  },
    signin:createValidator({
        mobile:Joi.string().required()
    })
};

export default validator;

