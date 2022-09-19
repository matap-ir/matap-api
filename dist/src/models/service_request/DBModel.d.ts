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
    age: {
        type: NumberConstructor;
        required: boolean;
    };
    mobile: {
        type: StringConstructor;
        required: boolean;
    };
    service: {
        type: typeof import("mongoose").Types.ObjectId;
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
        type: typeof import("mongoose").Types.ObjectId;
        ref: string;
        required: boolean;
    };
    app: {
        type: StringConstructor;
        required: boolean;
    };
};
export default dbModel;
