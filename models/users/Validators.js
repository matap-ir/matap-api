"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importStar(require("../Joi"));
const validator = {
    db: {
        insert: {
            validator: Joi_1.default.alternatives().try(Joi_1.default.object({
                mobile: Joi_1.phone().required(),
                name: Joi_1.default.string().required(),
                type: Joi_1.default.string().required().allow('DOCTOR'),
                code: Joi_1.default.number().required(),
                price: Joi_1.default.number().required(),
                fcmtoken: Joi_1.default.string().optional().allow(null),
                specialization: require('../specialization/Validators').default.db.update.validator.required(),
                gender: Joi_1.default.string().required().allow('', 'male', 'female'),
                details: Joi_1.default.object().required().keys({
                    city: Joi_1.default.string().required(),
                    nezam_pezeshki_code: Joi_1.default.string().required(),
                    monthlyCut: Joi_1.default.number().required(),
                    clinics: Joi_1.default.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    hospitals: Joi_1.default.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    response_days: Joi_1.default.object({
                        0: Joi_1.default.string().optional().allow(''),
                        1: Joi_1.default.string().optional().allow(''),
                        2: Joi_1.default.string().optional().allow(''),
                        3: Joi_1.default.string().optional().allow(''),
                        4: Joi_1.default.string().optional().allow(''),
                        5: Joi_1.default.string().optional().allow(''),
                        6: Joi_1.default.string().optional().allow(''),
                    }).required()
                }),
            }), Joi_1.default.object({
                gender: Joi_1.default.string().required().allow('', 'male', 'female'),
                mobile: Joi_1.phone().required(),
                name: Joi_1.default.string().required(),
                type: Joi_1.default.string().required().allow('PATIENT'),
                currency: Joi_1.default.number().optional(),
            }))
        },
        update: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            mobile: Joi_1.phone(),
            type: Joi_1.default.string().required().allow('PATIENT', 'DOCTOR'),
            name: Joi_1.default.string().required(),
            code: Joi_1.default.number().optional(),
            imageUrl: Joi_1.default.string().optional(),
            price: Joi_1.default.number().required(),
            specialization: Joi_1.default.any().required(),
            currency: Joi_1.default.number().optional(),
            sms_code: Joi_1.default.number().optional().allow(null),
            fcmtoken: Joi_1.default.string().optional().allow(null),
            gender: Joi_1.default.string().required().allow('', 'male', 'female'),
            details: Joi_1.default.object().keys({
                city: Joi_1.default.string().required(),
                nezam_pezeshki_code: Joi_1.default.string().required(),
                monthlyCut: Joi_1.default.number().required(),
                clinics: Joi_1.default.array().items(Joi_1.default.any()).required(),
                hospitals: Joi_1.default.array().items(Joi_1.default.any()).required(),
                response_days: Joi_1.default.object({
                    0: Joi_1.default.string().optional().allow(''),
                    1: Joi_1.default.string().optional().allow(''),
                    2: Joi_1.default.string().optional().allow(''),
                    3: Joi_1.default.string().optional().allow(''),
                    4: Joi_1.default.string().optional().allow(''),
                    5: Joi_1.default.string().optional().allow(''),
                    6: Joi_1.default.string().optional().allow(''),
                }).required()
            })
        })
    },
    public: {
        post: {
            validator: Joi_1.default.alternatives().try(Joi_1.default.object({
                mobile: Joi_1.phone().required(),
                name: Joi_1.default.string().required(),
                type: Joi_1.default.string().required().allow('DOCTOR'),
                code: Joi_1.default.number().required(),
                price: Joi_1.default.number().required(),
                fcmtoken: Joi_1.default.string().optional().allow(null),
                gender: Joi_1.default.string().required().allow('', 'male', 'female'),
                specialization: require('../specialization/Validators').default.public.patch.validator.required(),
                details: Joi_1.default.object().required().keys({
                    city: Joi_1.default.string().required(),
                    nezam_pezeshki_code: Joi_1.default.string().required(),
                    monthlyCut: Joi_1.default.number().required(),
                    clinics: Joi_1.default.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    hospitals: Joi_1.default.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    response_days: Joi_1.default.object({
                        0: Joi_1.default.string().optional().allow(''),
                        1: Joi_1.default.string().optional().allow(''),
                        2: Joi_1.default.string().optional().allow(''),
                        3: Joi_1.default.string().optional().allow(''),
                        4: Joi_1.default.string().optional().allow(''),
                        5: Joi_1.default.string().optional().allow(''),
                        6: Joi_1.default.string().optional().allow(''),
                    }).required()
                }),
            }), Joi_1.default.object({
                gender: Joi_1.default.string().optional().allow('', 'male', 'female'),
                mobile: Joi_1.phone().required(),
                name: Joi_1.default.string().required(),
                type: Joi_1.default.string().required().allow('PATIENT'),
                currency: Joi_1.default.number().optional(),
            }))
        },
        patch: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            mobile: Joi_1.phone(),
            type: Joi_1.default.string().required().allow('PATIENT', 'DOCTOR'),
            name: Joi_1.default.string().required(),
            code: Joi_1.default.number().optional(),
            imageUrl: Joi_1.default.string().optional(),
            price: Joi_1.default.number().optional(),
            specialization: require('../specialization/Validators').default.public.patch.validator.optional(),
            currency: Joi_1.default.number().optional(),
            fcmtoken: Joi_1.default.string().optional().allow(null),
            gender: Joi_1.default.string().required().allow('', 'male', 'female'),
            finalizable_visits: Joi_1.default.array().items(Joi_1.default.string()),
            details: Joi_1.default.object().optional().keys({
                city: Joi_1.default.string().required(),
                nezam_pezeshki_code: Joi_1.default.string().required(),
                monthlyCut: Joi_1.default.number().required(),
                clinics: Joi_1.default.array().items(require('../health_center/Validators').default.public.patch.validator.required()).required(),
                hospitals: Joi_1.default.array().items(require('../health_center/Validators').default.public.patch.validator.required()).required(),
                response_days: Joi_1.default.object({
                    0: Joi_1.default.string().optional().allow(''),
                    1: Joi_1.default.string().optional().allow(''),
                    2: Joi_1.default.string().optional().allow(''),
                    3: Joi_1.default.string().optional().allow(''),
                    4: Joi_1.default.string().optional().allow(''),
                    5: Joi_1.default.string().optional().allow(''),
                    6: Joi_1.default.string().optional().allow(''),
                }).required()
            })
        })
    },
    signin: createValidator_1.default({
        mobile: Joi_1.default.string().required()
    })
};
exports.default = validator;
