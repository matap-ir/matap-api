import { Schema } from 'mongoose';
declare const dbModel: {
    sessionId: {
        type: StringConstructor;
        index: boolean;
        required: boolean;
    };
    userId: {
        type: StringConstructor;
        index: boolean;
        required: boolean;
    };
    event: {
        type: StringConstructor;
        required: boolean;
    };
    data: {
        type: typeof Schema.Types.Mixed;
        required: boolean;
    };
    timeStamp: {
        type: NumberConstructor;
        required: boolean;
    };
};
export default dbModel;
