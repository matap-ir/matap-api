import { Schema } from 'mongoose';
declare const dbModel: {
    requestDate: {
        type: NumberConstructor;
        required: boolean;
    };
    issuer: {
        type: {
            type: StringConstructor;
            required: boolean;
        };
        user: {
            type: typeof Schema.Types.ObjectId;
            ref: string;
            required: boolean;
        };
        admin: {
            type: typeof Schema.Types.ObjectId;
            ref: string;
            required: boolean;
        };
    };
    doctor: {
        type: typeof Schema.Types.ObjectId;
        required: boolean;
        ref: string;
    };
    state: {
        type: StringConstructor;
        required: boolean;
    };
    timeLine: {
        type: (typeof Schema.Types.Mixed)[];
        required: boolean;
        default: never[];
    };
    type: {
        type: StringConstructor;
        required: boolean;
    };
    otherInfos: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    trackingCode: {
        type: StringConstructor;
        required: boolean;
        unique: boolean;
    };
    due: {
        type: {
            date: {
                type: {
                    from: {
                        type: NumberConstructor;
                        required: boolean;
                    };
                    to: {
                        type: NumberConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
            };
            message: {
                type: NumberConstructor;
                required: boolean;
            };
        };
        required: boolean;
    };
};
export default dbModel;
