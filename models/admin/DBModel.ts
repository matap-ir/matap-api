import { ObjectId } from 'mongoose';

const dbModel = {
    name:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    type:{type:String,required:true},
    privileges:{type:require('../privileges/DBModel').default,required:true,default:{}},
};

export default dbModel;
