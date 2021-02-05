declare const dbModel: {
    id: {
        type: StringConstructor;
        required: boolean;
    };
    sender: {
        type: StringConstructor;
        required: boolean;
    };
    text: StringConstructor;
    sendStatus: {
        type: StringConstructor;
        required: boolean;
    };
    type: {
        type: StringConstructor;
        required: boolean;
    };
    url: StringConstructor;
    date: NumberConstructor;
    file_size: NumberConstructor;
    file_name: StringConstructor;
    mediaInfo: {
        width: NumberConstructor;
        height: NumberConstructor;
        duration: NumberConstructor;
        orientation: NumberConstructor;
    };
};
export default dbModel;
