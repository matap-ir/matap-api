import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import User from './User';

console.log('HELLO FROM THE NEW VERSION 5');

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
                creationDate:Joi.number().required(),
                specialization:require('../specialization/Validators').default.db.update.validator.required(),
                gender:Joi.string().optional().allow('','male','female'),
                notificationQueuePatients: Joi.array().items(Joi.string()).optional(),
                details:Joi.object().required().keys({
                    displayInList: Joi.boolean().required(),
                    maxVisitDurationMillisec:Joi.number().required().positive().min(5 * 60 * 1000).max(2 * 60 * 60 * 1000),
                    city:Joi.string().required(),
                    shaba:Joi.string().required(),
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
                name:Joi.string().optional().allow(''),
                type:Joi.string().required().allow('PATIENT'),
                creationDate:Joi.number().required(),
                currency: Joi.number().optional(),
            })
        )
    },
      update:Joi.alternatives().try(
          Joi.object({
              _id:Joi.any().required(),
              mobile:phone(),
              type:Joi.string().required().allow('DOCTOR'),
              name:Joi.string().optional().allow(''),
              code:Joi.number().optional(),
              imageUrl:Joi.string().optional(),
              price:Joi.number().required(),
              specialization:Joi.any().required(),
              currency: Joi.number().optional(),
              sms_code:Joi.number().optional().allow(null),
              fcmtoken:Joi.string().optional().allow(null),
              gender:Joi.string().optional().allow('','male','female'),
              notificationQueuePatients: Joi.array().items(Joi.string()).optional(),
              details:Joi.object().keys({
                  displayInList: Joi.boolean().required(),
                  maxVisitDurationMillisec:Joi.number().required().positive().min(5 * 60 * 1000).max(2 * 60 * 60 * 1000),
                  city:Joi.string().required(),
                  shaba:Joi.string().required(),
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
          }),
          Joi.object({
              _id:Joi.any().required(),
              gender:Joi.string().optional().allow('','male','female'),
              mobile:phone().required(),
              name:Joi.string().optional().allow(''),
              type:Joi.string().optional().allow('PATIENT'),
              currency: Joi.number().optional(),
          })
      )
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
                      displayInList: Joi.boolean().required(),
                      maxVisitDurationMillisec:Joi.number().required().positive().min(5 * 60 * 1000).max(2 * 60 * 60 * 1000),
                      city:Joi.string().required(),
                      shaba:Joi.string().required(),
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
                  name:Joi.string().optional().allow(''),
                  type:Joi.string().required().allow('PATIENT'),
                  currency: Joi.number().optional(),
              })
          )
      },
      patch:Joi.alternatives().try(
          Joi.object({
              _id:Joi.any().required(),
              mobile:phone(),
              type:Joi.string().required().allow('PATIENT','DOCTOR'),
              name:Joi.string().optional().allow(''),
              code:Joi.number().optional(),
              imageUrl:Joi.string().optional(),
              price:Joi.number().optional(),
              specialization:require('../specialization/Validators').default.public.patch.validator.optional(),
              currency: Joi.number().optional(),
              fcmtoken:Joi.string().optional().allow(null),
              gender:Joi.string().optional().allow('','male','female'),
              finalizable_visits: Joi.array().items(Joi.string()),
              details:Joi.object().optional().keys({
                  displayInList: Joi.boolean().required(),
                  maxVisitDurationMillisec:Joi.number().required().positive().min(5 * 60 * 1000).max(2 * 60 * 60 * 1000),
                  city:Joi.string().required(),
                  shaba:Joi.string().required(),
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
          }),
          Joi.object({
              gender:Joi.string().optional().allow('','male','female'),
              mobile:phone().required(),
              name:Joi.string().optional().allow(''),
              type:Joi.string().optional().allow('PATIENT')
          })
      )
  },
    signin:createValidator({
        mobile:Joi.string().required()
    })
};

export default validator;

