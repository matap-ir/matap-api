import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import {Privileges} from '../../index';

const privilegeOptionsDetails =  Joi.object().keys({
    allowed: Joi.boolean().required(),
    whiteList: Joi.array().items(Joi.any()).required(),
    test: Joi.string().optional().allow(null)
})

const privilegeOptions = Joi.object({
    post: privilegeOptionsDetails,
    patch: privilegeOptionsDetails,
    delete: privilegeOptionsDetails,
    get: privilegeOptionsDetails,
    put: privilegeOptionsDetails,
    menuVisible: Joi.boolean().required()
})

const general = createValidator({
    users: privilegeOptions,
    admins: privilegeOptions,
    visits: privilegeOptions,
    medicalServices: privilegeOptions,
    healthCenters: privilegeOptions,
    adminLogs: privilegeOptions,
    reservations: privilegeOptions,
    discounts: privilegeOptions,
    serverConfigs: privilegeOptions,
    serviceRequests: privilegeOptions,
    specializations: privilegeOptions,
    transactions: privilegeOptions,
    notifications: privilegeOptions,
    analytics: privilegeOptions,
    calls: privilegeOptions
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

