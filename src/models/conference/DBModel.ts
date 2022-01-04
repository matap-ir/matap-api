import Joi from '../Joi';
import {Schema} from 'mongoose';

const dbModel = {
    id: {type: String,required: true,index: true,unique: true},
    host: {type: String,required: true},
    visitId:{type: String,required: true,index: true},
    createdAt: {type: Number,required: true},
    endedAt: {type: Number,required: false},
    type:{type: String,required: true},
    initiator: {type: Schema.Types.Mixed,required: true},
    receiver: {type: Schema.Types.Mixed,required: true},
    iceServers: {type: Schema.Types.Mixed,required: true},
    mediaConstraints: {type: Schema.Types.Mixed,required: true},
    videoCallVersion: {type: String,required: true},
    retryThreshold: {type: Number,required: true},
    state: {type: String,required: true,index: true},
    iceTransportPolicy: {type: String,required: true},
    videoMaxBitrate: {type: Schema.Types.Mixed,required: false},
    audioMaxBitrate: {type: Schema.Types.Mixed,required: false},
    preferredCodecs: {type: Schema.Types.Mixed,required: true},
    trickleIce: {type: Boolean,required: true},
    pingTimeout: {type: Number,required: false},
    forceSpeaker: {type: Boolean,required: true},
    events: {type: Schema.Types.Mixed,required: true}
};

export default dbModel;
