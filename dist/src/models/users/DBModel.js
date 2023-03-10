"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_types_1 = require("../../mongoose-types");
const dbModel = {
    mobile: { type: String, index: true, unique: true, required: true },
    type: { type: String, require: true },
    name: { type: String, required: false, default: '' },
    imageUrl: { type: String },
    code: { type: Number, index: true, unique: true, sparse: true },
    specialization: { type: mongoose_types_1.ObjectId, ref: 'specializations' },
    price: { type: Number },
    currency: { type: Number, default: 0, required: true },
    ready: { type: Boolean, default: false },
    sms_code: { type: String, required: false },
    fcmtoken: { type: String, required: false },
    creationDate: { type: Number, required: true },
    finalizable_visits: { type: [String], default: [] },
    gender: { type: String, default: '' },
    notificationQueuePatients: { type: [String], required: true, default: [] },
    os: { type: String, required: false },
    settings: {
        type: {
            notifications: {
                type: {
                    newPatient: {
                        notification: Boolean,
                        sms: Boolean
                    },
                    workTimeClose: {
                        notification: Boolean,
                        sms: Boolean
                    },
                    workTimeEnded: {
                        notification: Boolean,
                        sms: Boolean
                    },
                    workTimeStarted: {
                        notification: Boolean,
                        sms: Boolean
                    }
                },
                required: true
            }
        },
        required: false,
    },
    details: {
        type: {
            reservationInfo: {
                type: {
                    enabled: Boolean,
                    phone: String,
                    address: String,
                    gapMinutes: Number,
                    cost: String,
                    coordinates: {
                        type: { lat: Number, lng: Number },
                        required: false
                    },
                    workTimes: {
                        type: {
                            saturday: { type: [{ from: String, to: String, exceptions: [String] }], required: true },
                            sunday: { type: [{ from: String, to: String, exceptions: [String] }], required: true },
                            monday: { type: [{ from: String, to: String, exceptions: [String] }], required: true },
                            tuesday: { type: [{ from: String, to: String, exceptions: [String] }], required: true },
                            wednesday: { type: [{ from: String, to: String, exceptions: [String] }], required: true },
                            thursday: { type: [{ from: String, to: String, exceptions: [String] }], required: true },
                            friday: { type: [{ from: String, to: String, exceptions: [String] }], required: true },
                        },
                        required: true
                    }
                },
                required: true
            },
            phone: { type: String, required: true },
            address: { type: String, required: true },
            videoCallAllowed: { type: Boolean, required: true },
            bio: { type: String, required: true },
            displayInList: { type: Boolean, required: true, default: true },
            maxVisitDurationMillisec: { type: Number, required: true },
            city: String,
            shaba: String,
            nezam_pezeshki_code: String,
            cut: Number,
            clinics: [{ type: mongoose_types_1.ObjectId, ref: 'healthcenters' }],
            hospitals: [{ type: mongoose_types_1.ObjectId, ref: 'healthcenters' }],
            response_days: {
                type: {
                    0: [require('../response_time/ResponseTime').default],
                    1: [require('../response_time/ResponseTime').default],
                    2: [require('../response_time/ResponseTime').default],
                    3: [require('../response_time/ResponseTime').default],
                    4: [require('../response_time/ResponseTime').default],
                    5: [require('../response_time/ResponseTime').default],
                    6: [require('../response_time/ResponseTime').default],
                },
                required: true,
                default: {
                    0: [],
                    1: [],
                    2: [],
                    3: [],
                    4: [],
                    5: [],
                    6: [],
                }
            }
        }
    }
};
exports.default = dbModel;
