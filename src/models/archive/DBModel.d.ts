/// <reference types="mongoose" />
declare const dbModel: {
    patient: {
        type: typeof import("mongoose").Types.ObjectId;
        ref: string;
        required: boolean;
        index: boolean;
    };
    doctor: {
        type: typeof import("mongoose").Types.ObjectId;
        ref: string;
        required: boolean;
        index: boolean;
    };
    title: {
        type: StringConstructor;
        required: boolean;
    };
    note: {
        type: StringConstructor;
        required: boolean;
    };
    fileUrl: {
        type: {
            url: StringConstructor;
            file_size: NumberConstructor;
            file_name: StringConstructor;
            mediaInfo: {
                type: {
                    width: NumberConstructor;
                    height: NumberConstructor;
                    duration: NumberConstructor;
                    orientation: NumberConstructor;
                };
                required: boolean;
            };
        };
        required: boolean;
    };
    createdAt: {
        type: NumberConstructor;
        required: boolean;
    };
};
export default dbModel;
