import { ObjectId } from 'mongoose';
import {User} from '../../index';
const dbModel = {
    patient: {type: ObjectId,ref:'users',required:true,index:true},
    doctor: {type: ObjectId,ref:'users',required:true,index:true},
    note: {type: String,required:true},
    fileUrl: {type: {file_size: Number,file_name: String,mediaInfo:{type: {width: Number,height: Number,duration: Number,orientation: Number},required: false}},required: false},
    createdAt: {type: Number,required: true},
};

export default dbModel;
