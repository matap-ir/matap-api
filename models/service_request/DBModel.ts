import { ObjectId } from 'mongoose';
const dbModel = {
    age:{type:Number,required:true},
    mobile:{type:String,required:true},
    gender:{type:String,required: true},
    details:{type:String,required:true}
};

export default dbModel;
