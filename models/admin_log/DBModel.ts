import { ObjectId } from 'mongoose';

const dbModel = {
    url: {type:String,required:true},
    headers:{type:[String],required:false,default:[]},
    user:{type:ObjectId,required:true,ref:'users'},
    description:{type:String,required:false},
    date: {type:Number,required:true},
    body:{type:Object,required:false},
    success:{type:Boolean,required:false},
    params:{type:[String],required:false,default:[]},
    type:{type:String,required:true},
    method:{type:String,required:true}
};

export default dbModel;
