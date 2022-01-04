/// <reference types="mongoose" />
declare const dbModel: {
    from: {
        type: {
            hour: StringConstructor;
            minute: StringConstructor;
        };
        required: boolean;
    };
    to: {
        type: {
            hour: StringConstructor;
            minute: StringConstructor;
        };
        required: boolean;
    };
    healthCenter: {
        type: typeof import("mongoose").Types.ObjectId;
        ref: string;
        required: boolean;
    };
};
export default dbModel;
