declare const dbModel: {
    logoUrl: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
        required: boolean;
    };
    subTitle: {
        type: StringConstructor;
        required: boolean;
    };
    details: {
        type: StringConstructor;
        required: boolean;
    };
    price: {
        type: NumberConstructor;
        required: boolean;
    };
};
export default dbModel;
