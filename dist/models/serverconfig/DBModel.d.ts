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
