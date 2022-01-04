declare const _default: {
    roomId: {
        type: StringConstructor;
        required: boolean;
    };
    members: {
        type: StringConstructor[];
        required: boolean;
        default: never[];
    };
    conversations: {
        delivered: {
            type: StringConstructor[];
            default: never[];
        };
        chat: any;
    }[];
};
export default _default;
