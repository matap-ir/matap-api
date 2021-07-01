import { Schema } from 'mongoose';
declare const dbModel: {
    id: {
        type: StringConstructor;
        required: boolean;
        index: boolean;
        unique: boolean;
    };
    host: {
        type: StringConstructor;
        required: boolean;
    };
    visitId: {
        type: StringConstructor;
        required: boolean;
        index: boolean;
    };
    createdAt: {
        type: NumberConstructor;
        required: boolean;
    };
    type: {
        type: StringConstructor;
        required: boolean;
    };
    initiator: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    receiver: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    iceServers: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    mediaConstraints: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    videoCallVersion: {
        type: StringConstructor;
        required: boolean;
    };
    retryThreshold: {
        type: NumberConstructor;
        required: boolean;
    };
    state: {
        type: StringConstructor;
        required: boolean;
    };
    iceTransportPolicy: {
        type: StringConstructor;
        required: boolean;
    };
    videoMaxBitrate: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    audioMaxBitrate: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    preferredCodecs: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    trickleIce: {
        type: BooleanConstructor;
        required: boolean;
    };
    pingTimeout: {
        type: NumberConstructor;
        required: boolean;
    };
    forceSpeaker: {
        type: BooleanConstructor;
        required: boolean;
    };
};
export default dbModel;
