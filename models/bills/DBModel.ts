import { ObjectId } from 'mongoose';
const dbModel = {
    amount:{type:Number,required:true},
    type:{type:String,required: true},
    issuer:{type:String,required:true},
    tracking_code:{type:String,required:true}
};

export default dbModel;
