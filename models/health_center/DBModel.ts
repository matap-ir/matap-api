import { ObjectId } from 'mongoose';
const dbModel = {
    name:{type:String,required:true},
    address:{type:String,required:true},
    logoUrl:{type:String}
};

export default dbModel;
