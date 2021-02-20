import { Schema } from 'mongoose';
declare const dbModel: {
    os: {
        type: StringConstructor;
        required: boolean;
    };
    fatal: {
        type: BooleanConstructor;
        required: boolean;
    };
    type: {
        type: StringConstructor;
        required: boolean;
    };
    date: {
        type: NumberConstructor;
        required: boolean;
    };
    error: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    occurrences: {
        type: NumberConstructor;
        required: boolean;
        default: number;
    };
    resolved: {
        type: BooleanConstructor;
        required: boolean;
        default: boolean;
    };
    user: {
        type: {
            userId: {
                type: StringConstructor;
                required: boolean;
            };
            userType: {
                type: StringConstructor;
                required: boolean;
            };
        };
    };
    app: {
        type: {
            build: {
                type: NumberConstructor;
                required: boolean;
            };
            versionCode: {
                type: StringConstructor;
                required: boolean;
            };
        };
    };
    device: {
        type: {
            manufacturer: {
                type: StringConstructor;
                required: boolean;
            };
            model: {
                type: StringConstructor;
                required: boolean;
            };
        };
    };
};
export default dbModel;
