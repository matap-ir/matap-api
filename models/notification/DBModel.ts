import { ObjectId } from 'mongoose';
const dbModel = {
    title:{type:String,required:true},
    body:{type:String,required:true},
    successCount:{type:Number,required: true},
    date:{type:Number,required:true},
    sender:{type:String,required:true,ref:'admins'},
    state:{type:String,required:true}
};

export default dbModel;
