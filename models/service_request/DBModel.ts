import { ObjectId } from 'mongoose';
const dbModel = {
    age:{type:Number,required:true},
    mobile:{type:String,required:true},
    service:{type:ObjectId,ref:'service_requests',required:true},
    gender:{type:String,required: true},
    request_date:{type:Number,required:true},
    details:{type:String,required:true}
};

export default dbModel;
