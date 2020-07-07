import { ObjectId } from 'mongoose';
const dbModel = {
    from: {type: {hour:String, minute:String},required:false},
    to: {type: {hour:String, minute:String},required:false},
    healthCenter: {type: ObjectId,ref:'healthcenters',required:false}
};

export default dbModel;
