"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const privilegeOptionsDetails = Joi_1.default.string().required();
const privilegeOptions = Joi_1.default.object({
    post: privilegeOptionsDetails,
    patch: privilegeOptionsDetails,
    delete: privilegeOptionsDetails,
    get: privilegeOptionsDetails,
    put: privilegeOptionsDetails,
    whiteList: Joi_1.default.array().items(Joi_1.default.any()).required(),
    menuVisible: Joi_1.default.boolean().required()
});
const general = createValidator_1.default({
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
