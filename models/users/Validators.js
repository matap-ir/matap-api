"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importStar(require("../Joi"));
console.log('HELLO FROM THE NEW VERSION 3');
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
                creationDate: Joi_1.default.number().required(),
                specialization: require('../specialization/Validators').default.db.update.validator.required(),
                gender: Joi_1.default.string().optional().allow('', 'male', 'female'),
                notificationQueuePatients: Joi_1.default.array().items(Joi_1.default.string()).optional(),
                details: Joi_1.default.object().required().keys({
                    displayInList: Joi_1.default.boolean().required(),
                    maxVisitDurationMillisec: Joi_1.default.number().required().positive().min(5 * 60 * 1000).max(2 * 60 * 60 * 1000),
                    city: Joi_1.default.string().required(),
                    shaba: Joi_1.default.string().required(),
                    nezam_pezeshki_code: Joi_1.default.string().required(),
                    cut: Joi_1.default.number().required(),
                    clinics: Joi_1.default.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    hospitals: Joi_1.default.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    response_days: Joi_1.default.object({
                        0: Joi_1.default.array().items(require('../response_time/Validators').default.db.insert.validator),
                        1: Joi_1.default.array().items(require('../response_time/Validators').default.db.insert.validator),
                        2: Joi_1.default.array().items(require('../response_time/Validators').default.db.insert.validator),
                        3: Joi_1.default.array().items(require('../response_time/Validators').default.db.insert.validator),
                        4: Joi_1.default.array().items(require('../response_time/Validators').default.db.insert.validator),
                        5: Joi_1.default.array().items(require('../response_time/Validators').default.db.insert.validator),
                        6: Joi_1.default.array().items(require('../response_time/Validators').default.db.insert.validator),
                    }).required()
                }),
            }), Joi_1.default.object({
                gender: Joi_1.default.string().optional().allow('', 'male', 'female'),
                mobile: Joi_1.phone().required(),
                name: Joi_1.default.string().optional().allow(''),
                type: Joi_1.default.string().required().allow('PATIENT'),
                creationDate: Joi_1.default.number().required(),
                currency: Joi_1.default.number().optional(),
            }))
        },
        update: Joi_1.default.alternatives().try(Joi_1.default.object({
            _id: Joi_1.default.any().required(),
            mobile: Joi_1.phone(),
            type: Joi_1.default.string().required().allow('DOCTOR'),
            name: Joi_1.default.string().optional().allow(''),
            code: Joi_1.default.number().optional(),
            imageUrl: Joi_1.default.string().optional(),
            price: Joi_1.default.number().required(),
            specialization: Joi_1.default.any().required(),
            currency: Joi_1.default.number().optional(),
            sms_code: Joi_1.default.number().optional().allow(null),
            fcmtoken: Joi_1.default.string().optional().allow(null),
            gender: Joi_1.default.string().optional().allow('', 'male', 'female'),
            notificationQueuePatients: Joi_1.default.array().items(Joi_1.default.string()).optional(),
            details: Joi_1.default.object().keys({
                displayInList: Joi_1.default.boolean().required(),
                maxVisitDurationMillisec: Joi_1.default.number().required().positive().min(5 * 60 * 1000).max(2 * 60 * 60 * 1000),
                city: Joi_1.default.string().required(),
                shaba: Joi_1.default.string().required(),
                nezam_pezeshki_code: Joi_1.default.string().required(),
                cut: Joi_1.default.number().required(),
                clinics: Joi_1.default.array().items(Joi_1.default.any()).required(),
                hospitals: Joi_1.default.array().items(Joi_1.default.any()).required(),
                response_days: Joi_1.default.object({
                    0: Joi_1.default.array().items(require('../response_time/Validators').default.db.update.validator),
                    1: Joi_1.default.array().items(require('../response_time/Validators').default.db.update.validator),
                    2: Joi_1.default.array().items(require('../response_time/Validators').default.db.update.validator),
                    3: Joi_1.default.array().items(require('../response_time/Validators').default.db.update.validator),
                    4: Joi_1.default.array().items(require('../response_time/Validators').default.db.update.validator),
                    5: Joi_1.default.array().items(require('../response_time/Validators').default.db.update.validator),
                    6: Joi_1.default.array().items(require('../response_time/Validators').default.db.update.validator),
                }).required()
            })
        }), Joi_1.default.object({
            _id: Joi_1.default.any().required(),
            gender: Joi_1.default.string().optional().allow('', 'male', 'female'),
            mobile: Joi_1.phone().required(),
            name: Joi_1.default.string().optional().allow(''),
            type: Joi_1.default.string().optional().allow('PATIENT'),
            currency: Joi_1.default.number().optional(),
        }))
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
                gender: Joi_1.default.string().optional().allow('', 'male', 'female'),
                specialization: require('../specialization/Validators').default.public.patch.validator.required(),
                details: Joi_1.default.object().required().keys({
                    displayInList: Joi_1.default.boolean().required(),
                    maxVisitDurationMillisec: Joi_1.default.number().required().positive().min(5 * 60 * 1000).max(2 * 60 * 60 * 1000),
                    city: Joi_1.default.string().required(),
                    shaba: Joi_1.default.string().required(),
                    nezam_pezeshki_code: Joi_1.default.string().required(),
                    cut: Joi_1.default.number().required(),
                    clinics: Joi_1.default.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    hospitals: Joi_1.default.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    response_days: Joi_1.default.object({
                        0: Joi_1.default.array().items(require('../response_time/Validators').default.public.post.validator),
                        1: Joi_1.default.array().items(require('../response_time/Validators').default.public.post.validator),
                        2: Joi_1.default.array().items(require('../response_time/Validators').default.public.post.validator),
                        3: Joi_1.default.array().items(require('../response_time/Validators').default.public.post.validator),
                        4: Joi_1.default.array().items(require('../response_time/Validators').default.public.post.validator),
                        5: Joi_1.default.array().items(require('../response_time/Validators').default.public.post.validator),
                        6: Joi_1.default.array().items(require('../response_time/Validators').default.public.post.validator),
                    }).required()
                }),
            }), Joi_1.default.object({
                gender: Joi_1.default.string().optional().allow('', 'male', 'female'),
                mobile: Joi_1.phone().required(),
                name: Joi_1.default.string().optional().allow(''),
                type: Joi_1.default.string().required().allow('PATIENT'),
                currency: Joi_1.default.number().optional(),
            }))
        },
        patch: Joi_1.default.alternatives().try(Joi_1.default.object({
            _id: Joi_1.default.any().required(),
            mobile: Joi_1.phone(),
            type: Joi_1.default.string().required().allow('PATIENT', 'DOCTOR'),
            name: Joi_1.default.string().optional().allow(''),
            code: Joi_1.default.number().optional(),
            imageUrl: Joi_1.default.string().optional(),
            price: Joi_1.default.number().optional(),
            specialization: require('../specialization/Validators').default.public.patch.validator.optional(),
            currency: Joi_1.default.number().optional(),
            fcmtoken: Joi_1.default.string().optional().allow(null),
            gender: Joi_1.default.string().optional().allow('', 'male', 'female'),
            finalizable_visits: Joi_1.default.array().items(Joi_1.default.string()),
            details: Joi_1.default.object().optional().keys({
                displayInList: Joi_1.default.boolean().required(),
                maxVisitDurationMillisec: Joi_1.default.number().required().positive().min(5 * 60 * 1000).max(2 * 60 * 60 * 1000),
                city: Joi_1.default.string().required(),
                shaba: Joi_1.default.string().required(),
                nezam_pezeshki_code: Joi_1.default.string().required(),
                cut: Joi_1.default.number().required(),
                clinics: Joi_1.default.array().items(require('../health_center/Validators').default.public.patch.validator.required()).required(),
                hospitals: Joi_1.default.array().items(require('../health_center/Validators').default.public.patch.validator.required()).required(),
                response_days: Joi_1.default.object({
                    0: Joi_1.default.array().items(require('../response_time/Validators').default.public.patch.validator),
                    1: Joi_1.default.array().items(require('../response_time/Validators').default.public.patch.validator),
                    2: Joi_1.default.array().items(require('../response_time/Validators').default.public.patch.validator),
                    3: Joi_1.default.array().items(require('../response_time/Validators').default.public.patch.validator),
                    4: Joi_1.default.array().items(require('../response_time/Validators').default.public.patch.validator),
                    5: Joi_1.default.array().items(require('../response_time/Validators').default.public.patch.validator),
                    6: Joi_1.default.array().items(require('../response_time/Validators').default.public.patch.validator),
                }).required()
            })
        }), Joi_1.default.object({
            gender: Joi_1.default.string().optional().allow('', 'male', 'female'),
            mobile: Joi_1.phone().required(),
            name: Joi_1.default.string().optional().allow(''),
            type: Joi_1.default.string().optional().allow('PATIENT')
        }))
    },
    signin: createValidator_1.default({
        mobile: Joi_1.default.string().required()
    })
};
exports.default = validator;
