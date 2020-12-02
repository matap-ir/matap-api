import { ObjectId } from 'mongoose';
import {User} from '../../index';
const dbModel = {
    patient: {type: ObjectId,ref:'users',required:true,index:true},
    doctor: {type: ObjectId,ref:'users',required:true,index:true},
    note: {type: String,required:true},
    fileUrl: {type: [String],required: false},
    createdAt: {type: Number,required: true},
};

export default dbModel;
