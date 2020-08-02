import { ObjectId } from 'mongoose';
import {User} from '../../index';

const dbModel = {
    url: {type:String,required:true},
    headers:{type:[String],required:false,default:[]},
    user:{type:ObjectId,required:true,ref:'users'},
    description:{type:String,required:false},
    date: {type:Number,required:true},
    body:{type:Object,required:false}
};

export default dbModel;
