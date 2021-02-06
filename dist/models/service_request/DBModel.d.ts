/// <reference types="mongoose" />
declare const dbModel: {
    age: {
        type: NumberConstructor;
        required: boolean;
    };
    mobile: {
        type: StringConstructor;
        required: boolean;
    };
    service: {
        type: import("mongoose").Types.ObjectIdConstructor;
        ref: string;
        required: boolean;
    };
    price: {
        type: NumberConstructor;
        required: boolean;
    };
    gender: {
        type: StringConstructor;
        required: boolean;
    };
    request_date: {
        type: NumberConstructor;
        required: boolean;
    };
    details: {
        type: StringConstructor;
        required: boolean;
    };
    trackingCode: {
        type: StringConstructor;
        required: boolean;
        unique: boolean;
    };
    status: {
        type: StringConstructor;
        required: boolean;
    };
    requester: {
        type: import("mongoose").Types.ObjectIdConstructor;
        ref: string;
        required: boolean;
    };
    app: {
        type: StringConstructor;
        required: boolean;
    };
};
export default dbModel;
