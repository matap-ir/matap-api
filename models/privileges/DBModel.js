"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const createPrivilegeOptionsDetails = (ref) => {
    return {
        type: {
            allowed: { type: Boolean, required: true, default: true },
            whiteList: [{ type: mongoose_1.ObjectId, ref, required: true, default: [] }],
            test: { type: String, required: false },
            filter: { type: String, required: false }
        },
        required: true,
        default: []
    };
};
const createPrivilegeOptions = (ref) => {
    return {
        type: {
            post: createPrivilegeOptionsDetails(ref),
            patch: createPrivilegeOptionsDetails(ref),
            delete: createPrivilegeOptionsDetails(ref),
            get: createPrivilegeOptionsDetails(ref),
            put: createPrivilegeOptionsDetails(ref),
            menuVisible: { type: Boolean, required: true, default: false }
        },
        required: true,
        default: {}
    };
};
const dbModel = {
    users: createPrivilegeOptions('users'),
    admins: createPrivilegeOptions('admins'),
    visits: createPrivilegeOptions('visits'),
    medicalServices: createPrivilegeOptions('medical_services'),
    healthCenters: createPrivilegeOptions('healthcenters'),
    adminLogs: createPrivilegeOptions('admin-logs'),
    discounts: createPrivilegeOptions('discount_coupons'),
    serverConfigs: createPrivilegeOptions('server_config'),
    serviceRequests: createPrivilegeOptions('service_requests'),
    specializations: createPrivilegeOptions('specializations'),
    transactions: createPrivilegeOptions('transactions')
};
exports.default = dbModel;
