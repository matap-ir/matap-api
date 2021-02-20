declare const dbModel: {
    name: {
        type: StringConstructor;
        required: boolean;
    };
    address: {
        type: StringConstructor;
        required: boolean;
    };
    logoUrl: {
        type: StringConstructor;
    };
    wallpaperUrl: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        required: boolean;
    };
    percentage: {
        type: NumberConstructor;
        required: boolean;
        default: number;
    };
    priorities: {
        type: StringConstructor[];
        required: boolean;
        default: never[];
    };
    shaba: {
        type: StringConstructor;
        required: boolean;
    };
    priority: {
        type: NumberConstructor;
        required: boolean;
        default: number;
    };
};
export default dbModel;
