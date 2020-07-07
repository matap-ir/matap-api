import { ObjectId } from 'mongoose';
const dbModel = {
    from: {type: {hour:String, minute:String},required:true},
    to: {type: {hour:String, minute:String},required:true},
    healthCenterId: {type: ObjectId,ref:'healthcenters',required:false}
};

export default dbModel;
