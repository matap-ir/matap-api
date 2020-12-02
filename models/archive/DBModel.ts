import { ObjectId } from 'mongoose';
import {User} from '../../index';
const dbModel = {
    patient: {type: ObjectId,ref:'users',required:true,index:true},
    doctor: {type: ObjectId,ref:'users',required:true,index:true},
    note: {type: String,required:true},
    attachments: {type: [String],required: true,default: []},
    createdAt: {type: Number,required: true},
};

export default dbModel;
