"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const privilegeOptions = Joi_1.default.object({
    create: Joi_1.default.boolean().optional().allow(null),
    edit: Joi_1.default.boolean().optional().allow(null),
    delete: Joi_1.default.boolean().optional().allow(null),
    view: Joi_1.default.boolean().optional().allow(null)
});
const general = createValidator_1.default({
    users: Joi_1.default.object({
        patients: privilegeOptions,
        doctors: privilegeOptions
    }),
    admins: privilegeOptions,
    visits: privilegeOptions,
    medicalServices: privilegeOptions,
    healthCenter: privilegeOptions,
    adminLogs: privilegeOptions,
    discounts: privilegeOptions,
    serverConfigs: privilegeOptions,
    serviceRequests: privilegeOptions,
    specializations: privilegeOptions,
    transactions: privilegeOptions
});
const validator = {
    db: {
        insert: general,
        update: general
    },
    public: {
        post: general,
        patch: general
    }
};
exports.default = validator;
