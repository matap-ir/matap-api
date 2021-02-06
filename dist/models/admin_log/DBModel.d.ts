/// <reference types="mongoose" />
declare const dbModel: {
    url: {
        type: StringConstructor;
        required: boolean;
    };
    path: {
        type: StringConstructor;
        required: boolean;
    };
    headers: {
        type: StringConstructor[];
        required: boolean;
        default: never[];
    };
    user: {
        type: typeof import("mongoose").Schema.Types.ObjectId;
        required: boolean;
        ref: string;
    };
    description: {
        type: StringConstructor;
        required: boolean;
    };
    date: {
        type: NumberConstructor;
        required: boolean;
    };
    body: {
        type: ObjectConstructor;
        required: boolean;
    };
    success: {
        type: BooleanConstructor;
        required: boolean;
    };
    params: {
        type: ObjectConstructor[];
        required: boolean;
        default: never[];
    };
    type: {
        type: StringConstructor;
        required: boolean;
    };
    method: {
        type: StringConstructor;
        required: boolean;
    };
};
export default dbModel;
