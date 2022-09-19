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
/// <reference types="mongoose/types/inferschematype" />
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
