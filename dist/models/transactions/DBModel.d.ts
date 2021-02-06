/// <reference types="mongoose" />
declare const dbModel: {
    amount: {
        type: NumberConstructor;
        required: boolean;
    };
    type: {
        type: StringConstructor;
        required: boolean;
    };
    tracking_code: {
        type: StringConstructor;
    };
    date: {
        type: NumberConstructor;
        required: boolean;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    discount: {
        type: NumberConstructor;
        required: boolean;
    };
    visit_id: {
        type: StringConstructor;
        required: boolean;
    };
    doctorCut: {
        type: NumberConstructor;
        required: boolean;
    };
    healthCenter: {
        type: typeof import("mongoose").Schema.Types.ObjectId;
        required: boolean;
        ref: string;
    };
    healthCenterCut: {
        type: NumberConstructor;
        required: boolean;
    };
    issuer: {
        type: {
            type: StringConstructor;
            required: boolean;
        };
        _id: {
            type: StringConstructor;
            required: boolean;
        };
        name: {
            type: StringConstructor;
            required: boolean;
        };
    };
    target: {
        _id: {
            type: StringConstructor;
            required: boolean;
        };
        name: {
            type: StringConstructor;
            required: boolean;
        };
    };
};
export default dbModel;
