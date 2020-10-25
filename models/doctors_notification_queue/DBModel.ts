import { ObjectId } from 'mongoose';
const dbModel = {
    doctorId:{type:String,required:true},
    patientsInQueue:{type:[String],required:true,default:[]}
};

export default dbModel;
