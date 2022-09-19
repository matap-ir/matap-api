declare const dbModel: {
    title: {
        type: StringConstructor;
        required: boolean;
    };
    code: {
        type: StringConstructor;
        required: boolean;
    };
    amount: {
        type: NumberConstructor;
        required: boolean;
    };
    start_date: {
        type: NumberConstructor;
        required: boolean;
    };
    end_date: {
        type: NumberConstructor;
        required: boolean;
    };
    per_user_limit: {
        type: NumberConstructor;
        required: boolean;
    };
    total_usage_limit: {
        type: NumberConstructor;
        required: boolean;
    };
    usages: {
        type: StringConstructor[];
        required: boolean;
        default: any[];
    };
};
export default dbModel;
