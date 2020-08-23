"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const privilegeOptionsDetails = {
    type: String,
    default: '(function(){ return true; })',
    required: true
};
const privilegeOptions = {
    type: {
        create: privilegeOptionsDetails,
        edit: privilegeOptionsDetails,
        delete: privilegeOptionsDetails,
        view: privilegeOptionsDetails
    },
    required: true
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
