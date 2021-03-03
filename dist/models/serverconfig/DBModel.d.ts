import { Schema } from 'mongoose';
declare const dbModel: {
    iceServers: {
        type: {
            username: StringConstructor;
            credential: StringConstructor;
            urls: StringConstructor[];
        }[];
    };
    mediaConstraints: ObjectConstructor;
    forceSpeaker: BooleanConstructor;
    termsandconditions: StringConstructor;
    retryThreshold: NumberConstructor;
    videoMaxBitrate: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    audioMaxBitrate: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    iceTransportPolicy: {
        type: StringConstructor;
        require: boolean;
    };
    preferredCodecs: {
        type: StringConstructor[];
        required: boolean;
    };
    trickleIce: {
        type: BooleanConstructor;
        required: boolean;
    };
    android: {
        forceUpdate: {
            type: BooleanConstructor;
            required: boolean;
        };
        versionCode: {
            type: StringConstructor;
            required: boolean;
        };
        downloadLink: {
            type: StringConstructor;
            required: boolean;
        };
        changeLog: {
            type: StringConstructor;
            required: boolean;
        };
    };
    ios: {
        forceUpdate: {
            type: BooleanConstructor;
            required: boolean;
        };
        versionCode: {
            type: StringConstructor;
            required: boolean;
        };
        downloadLink: {
            type: StringConstructor;
            required: boolean;
        };
        changeLog: {
            type: StringConstructor;
            required: boolean;
        };
    };
};
export default dbModel;
