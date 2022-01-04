import {ObjectId} from '../../../mongoose-types';

const dbModel = {
    url: {type:String,required:true},
    path:{type:String,required:true},
    headers:{type:[String],required:false,default:[]},
    user:{type:ObjectId,required:true,ref:'admins'},
    description:{type:String,required:false},
    date: {type:Number,required:true},
    body:{type:Object,required:false},
    success:{type:Boolean,required:false},
    params:{type:[Object],required:false,default:[]},
    type:{type:String,required:false},
    method:{type:String,required:true}
};

export default dbModel;
