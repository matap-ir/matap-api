import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import {Privileges} from '../../index';

const privilegeOptionsDetails =  Joi.object({
    allowed: Joi.boolean().required(),
    restrictions: Joi.array().items(Joi.string()).optional().allow(null),
    menuVisible: Joi.boolean().required()
})

const privilegeOptions = Joi.object({
    create: privilegeOptionsDetails,
    edit: privilegeOptionsDetails,
    delete: privilegeOptionsDetails,
    view: privilegeOptionsDetails
})

const general = createValidator({
    users:Joi.object({
        patients: privilegeOptions,
        doctors: privilegeOptions
    }),
    admins: privilegeOptions,
    visits: privilegeOptions,
    medicalServices: privilegeOptions,
    healthCenters: privilegeOptions,
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

