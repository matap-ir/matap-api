"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
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
