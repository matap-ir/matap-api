import { ObjectId } from 'mongoose';
const dbModel = {
    mobile: {type: String, required: true},
    type:{type: String,require:true},
    name:{type:String,required:true},
    imageUrl:{type:String},
    code:{type:Number,required:false},
    specialization:{type:String,required:false}
};

export default dbModel;
