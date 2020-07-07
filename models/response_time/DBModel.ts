import { ObjectId } from 'mongoose';
const dbModel = {
    from: {type: {hour:String, minute:String},required:true},
    to: {type: {hour:String, minute:String},required:true},
    type: {type: String,required:true}
};

export default dbModel;
