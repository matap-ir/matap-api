declare const dbModel: {
    visitId: {
        type: StringConstructor;
        required: boolean;
    };
    service_quality: {
        type: NumberConstructor;
        required: boolean;
    };
    video_call_satisfaction: {
        type: NumberConstructor;
        required: boolean;
    };
    doctor_details_clearity: {
        type: NumberConstructor;
        required: boolean;
    };
    doctor_solutions: {
        type: NumberConstructor;
        required: boolean;
    };
    doctor_detailed_consequences: {
        type: NumberConstructor;
        required: boolean;
    };
    environment_details: {
        type: NumberConstructor;
        required: boolean;
    };
};
export default dbModel;
