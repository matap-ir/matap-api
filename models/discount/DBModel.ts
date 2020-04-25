import { ObjectId } from 'mongoose';
const dbModel = {
    title: {type:String,required:true},
    code: {type:String,required:true},
    amount: {type:Number,required:true},
    end_date: {type:Number,required:true},
    per_user_limit: {type:Number,required:true},
    total_usage_limit: {type:Number,required:true},
    usages: {type:[{userId:String,roomId:String}],required:true,default:[]}
};

export default dbModel;
