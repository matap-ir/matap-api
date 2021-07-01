import createValidator from '../createValidator';
import Joi from '../Joi';
import {GeneratedValidator} from '../Validator';
import Conference from './Conference';

const validator : GeneratedValidator<Conference> = {
    db:{
        insert:createValidator({
            id:Joi.string().required(),
            host:Joi.string().required(),
            visitId:Joi.string().required(),
            createdAt: Joi.number().required(),
            type: Joi.string().required(),
            initiator: Joi.any().required(),
            receiver: Joi.any().required(),
            iceServers: Joi.any().required(),
            mediaConstraints: Joi.any().required(),
            videoCallVersion: Joi.string().required(),
            retryThreshold: Joi.number().required(),
            state: Joi.string().required(),
            iceTransportPolicy: Joi.string().required(),
            videoMaxBitrate: Joi.any().optional().allow(null),
            audioMaxBitrate: Joi.any().optional().allow(null),
            preferredCodecs: Joi.any().required(),
            trickleIce: Joi.boolean().required(),
            pingTimeout: Joi.number().required(),
            forceSpeaker: Joi.boolean().required(),
            events: Joi.any().required()
        }),
        update:createValidator({
            id:Joi.string().required(),
            host:Joi.string().required(),
            visitId:Joi.string().required(),
            createdAt: Joi.number().required(),
            type: Joi.string().required(),
            initiator: Joi.any().required(),
            receiver: Joi.any().required(),
            iceServers: Joi.any().required(),
            mediaConstraints: Joi.any().required(),
            videoCallVersion: Joi.string().required(),
            retryThreshold: Joi.number().required(),
            state: Joi.string().required(),
            iceTransportPolicy: Joi.string().required(),
            videoMaxBitrate: Joi.any().optional().allow(null),
            audioMaxBitrate: Joi.any().optional().allow(null),
            preferredCodecs: Joi.any().required(),
            trickleIce: Joi.boolean().required(),
            pingTimeout: Joi.number().required(),
            forceSpeaker: Joi.boolean().required(),
            events: Joi.any().required()
        })
    }
};

export default validator;

