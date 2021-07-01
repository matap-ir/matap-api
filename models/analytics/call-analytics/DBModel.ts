import {Schema} from 'mongoose';

const dbModel = {
    sessionId: {type:String,index: true,required:true},
    userId: {type:String,index: true,required:true},
    event: {type: String,required: true},
    data: {type:Schema.Types.Mixed,required:false},
    timeStamp: {type: Number,required: true}
};

export default dbModel;
