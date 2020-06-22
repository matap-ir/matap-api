"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    _id: { type: mongoose_1.ObjectId, required: true, auto: true },
    iceServers: {
        type: [{ username: String, credential: String, urls: [String] }]
    },
    mediaConstraints: Object,
    forceSpeaker: Boolean,
    medicalServices: {
        type: [require('../medical_service/MedicalService').default],
        required: true,
        default: []
    }
};
exports.default = dbModel;
