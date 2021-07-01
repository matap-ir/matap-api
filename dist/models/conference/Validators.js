"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: createValidator_1.default({
            id: Joi_1.default.string().required(),
            host: Joi_1.default.string().required(),
            visitId: Joi_1.default.string().required(),
            createdAt: Joi_1.default.number().required(),
            type: Joi_1.default.string().required(),
            initiator: Joi_1.default.any().required(),
            receiver: Joi_1.default.any().required(),
            iceServers: Joi_1.default.any().required(),
            mediaConstraints: Joi_1.default.any().required(),
            videoCallVersion: Joi_1.default.string().required(),
            retryThreshold: Joi_1.default.number().required(),
            state: Joi_1.default.string().required(),
            iceTransportPolicy: Joi_1.default.string().required(),
            videoMaxBitrate: Joi_1.default.any().optional().allow(null),
            audioMaxBitrate: Joi_1.default.any().optional().allow(null),
            preferredCodecs: Joi_1.default.any().required(),
            trickleIce: Joi_1.default.boolean().required(),
            pingTimeout: Joi_1.default.number().required(),
            forceSpeaker: Joi_1.default.boolean().required(),
            events: Joi_1.default.any().required()
        }),
        update: createValidator_1.default({
            id: Joi_1.default.string().required(),
            host: Joi_1.default.string().required(),
            visitId: Joi_1.default.string().required(),
            createdAt: Joi_1.default.number().required(),
            type: Joi_1.default.string().required(),
            initiator: Joi_1.default.any().required(),
            receiver: Joi_1.default.any().required(),
            iceServers: Joi_1.default.any().required(),
            mediaConstraints: Joi_1.default.any().required(),
            videoCallVersion: Joi_1.default.string().required(),
            retryThreshold: Joi_1.default.number().required(),
            state: Joi_1.default.string().required(),
            iceTransportPolicy: Joi_1.default.string().required(),
            videoMaxBitrate: Joi_1.default.any().optional().allow(null),
            audioMaxBitrate: Joi_1.default.any().optional().allow(null),
            preferredCodecs: Joi_1.default.any().required(),
            trickleIce: Joi_1.default.boolean().required(),
            pingTimeout: Joi_1.default.number().required(),
            forceSpeaker: Joi_1.default.boolean().required(),
            events: Joi_1.default.any().required()
        })
    }
};
exports.default = validator;
