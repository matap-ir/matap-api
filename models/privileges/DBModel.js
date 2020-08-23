"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const privilegeOptionsDetails = {
    type: {
        allowed: { type: Boolean, required: true, default: false },
        restrictions: { type: [String], required: false, default: null }
    },
    default: { allowed: false, restrictions: null },
    required: true
};
const privilegeOptions = {
    type: {
        create: privilegeOptionsDetails,
        edit: privilegeOptionsDetails,
        delete: privilegeOptionsDetails,
        view: privilegeOptionsDetails
    },
    required: true,
    default: {}
};
const dbModel = {
    users: {
        type: {
            patients: privilegeOptions,
            doctors: privilegeOptions
        },
        required: true,
        default: {}
    },
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
};
exports.default = dbModel;
