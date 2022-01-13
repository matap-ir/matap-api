/// <reference types="mongoose" />
declare const dbModel: {
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
export default dbModel;
