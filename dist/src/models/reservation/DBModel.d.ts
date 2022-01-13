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
            type: typeof import("mongoose").Types.ObjectId;
            ref: string;
            required: boolean;
        };
        admin: {
            type: typeof import("mongoose").Types.ObjectId;
            ref: string;
            required: boolean;
        };
    };
    doctor: {
        type: typeof import("mongoose").Types.ObjectId;
        required: boolean;
        ref: string;
    };
    state: {
        type: StringConstructor;
        required: boolean;
    };
    type: {
        type: StringConstructor;
        required: boolean;
    };
    info: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    trackingCode: {
        type: StringConstructor;
        required: boolean;
        unique: boolean;
    };
    tag: {
        type: StringConstructor;
        required: boolean;
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
