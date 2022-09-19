/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
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
        type: typeof import("mongoose").Types.ObjectId;
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
