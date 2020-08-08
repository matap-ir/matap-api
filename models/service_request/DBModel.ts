import { ObjectId } from 'mongoose';
import Joi from '../Joi';
const dbModel = {
    age:{type:Number,required:true},
    mobile:{type:String,required:true},
    service:{type:ObjectId,ref:'medical_services',required:true},
    price:{type:Number,required:false},
    gender:{type:String,required: true},
    request_date:{type:Number,required:true},
    details:{type:String,required:true},
    trackingCode:{type:String,required:true,unique:true},
    status:{type:String,required:true},
    requester:{type:ObjectId,ref:'users',required:true}
};

export default dbModel;
