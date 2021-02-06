/// <reference types="mongoose" />
declare const dbModel: {
    type: {
        type: StringConstructor;
        required: boolean;
    };
    user: {
        type: import("mongoose").Types.ObjectIdConstructor;
        ref: string;
        required: boolean;
    };
    admin: {
        type: import("mongoose").Types.ObjectIdConstructor;
        ref: string;
        required: boolean;
    };
};
export default dbModel;
