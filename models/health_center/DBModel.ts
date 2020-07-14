import { ObjectId } from 'mongoose';
const dbModel = {
    name:{type:String,required:true},
    address:{type:String,required:true},
    logoUrl:{type:String},
    wallpaperUrl:{type: String},
    type:{type:String,required:true},
    percentage:{type:Number,required:true,default:0}
};

export default dbModel;
