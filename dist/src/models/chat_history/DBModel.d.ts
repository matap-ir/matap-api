declare const _default: {
    roomId: {
        type: StringConstructor;
        required: boolean;
    };
    members: {
        type: StringConstructor[];
        required: boolean;
        default: any[];
    };
    conversations: {
        delivered: {
            type: StringConstructor[];
            default: any[];
        };
        chat: any;
    }[];
};
export default _default;
