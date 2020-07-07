import { ObjectId } from 'mongoose';
const dbModel = {
    name:{type:String,required:true},
    address:{type:String,required:true},
    logoUrl:{type:String},
    type:{type:String,required:true},
    percentage:{Type:Number,required:true,default:0}
};

export default dbModel;
