import { ObjectId } from 'mongoose';
const dbModel = {
    mobile: {type: String, required: true},
    type:{type: String,require:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    code:{type:Number,required:false}
};

export default dbModel;
