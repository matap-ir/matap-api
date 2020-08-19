import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import {Privileges} from '../../index';

const privilegeOptions = Joi.object({
    create: Joi.boolean().optional().allow(null),
    edit: Joi.boolean().optional().allow(null),
    delete: Joi.boolean().optional().allow(null),
    view: Joi.boolean().optional().allow(null)
})

const general = createValidator({
    users:Joi.object({
        patients: privilegeOptions,
        doctors: privilegeOptions
    }),
    admins:Joi.object({
        support: privilegeOptions,
        healthCenter: privilegeOptions
    }),
    visits: privilegeOptions,
    medicalServices: privilegeOptions,
    healthCenter: privilegeOptions,
    adminLogs: privilegeOptions,
    discounts: privilegeOptions,
    serverConfigs: privilegeOptions,
    serviceRequests: privilegeOptions,
    specializations: privilegeOptions,
    transactions: privilegeOptions
})

const validator : GeneratedValidator<Privileges> = {
  db:{
      insert:general,
      update:general
  },
  public:{
      post:general,
      patch:general
  }
};

export default validator;

