import { ObjectId } from 'mongoose';
const dbModel = {
    name: {type: String, required: true},
    price:{type:Number,required :true},
    monthlyCut:{type:Number,required :true},
    doctorCut:{type:Number,required :true},
};

export default dbModel;
