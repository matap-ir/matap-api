declare const dbModel: {
    name: {
        type: StringConstructor;
        required: boolean;
    };
    username: {
        type: StringConstructor;
        required: boolean;
        unique: boolean;
    };
    password: {
        type: StringConstructor;
        required: boolean;
    };
    type: {
        type: StringConstructor;
        required: boolean;
    };
    privileges: {
        type: any;
        required: boolean;
        default: {};
    };
};
export default dbModel;
