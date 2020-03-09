import { ObjectId } from 'mongoose';
const dbModel = {
    sender:{type:String,required:true},
    text:String,
    deliveryStatus:{type:String,required:true},
    type:{type:String,required:true},
    url:String,
    date:Date,
    file_size:Number
};

export default dbModel;
