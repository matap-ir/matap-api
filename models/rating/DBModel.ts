const dbModel = {
    visitId: {type: String,required:true},
    service_quality:{type:Number,required:true},
    video_call_satisfaction:{type:Number,required:true},
    doctor_details_clearity:{type:Number,required:true},
    doctor_solutions:{type:Number,required:true},
    doctor_detailed_consequences:{type:Number,required:true},
    environment_details:{type:Number,required:true},
};

export default dbModel;
