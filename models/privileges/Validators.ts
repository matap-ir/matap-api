import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import {Privileges} from '../../index';

const privilegeOptionsDetails =  Joi.object().keys({
    allowed: Joi.boolean().required(),
    whiteList: Joi.array().items(Joi.any()).required()
})

const privilegeOptions = Joi.object({
    post: privilegeOptionsDetails,
    patch: privilegeOptionsDetails,
    delete: privilegeOptionsDetails,
    get: privilegeOptionsDetails,
    put: privilegeOptionsDetails,
    menuVisible: Joi.boolean().required(),
    test: Joi.string().optional().allow(null)
})

const general = createValidator({
    users: privilegeOptions,
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

