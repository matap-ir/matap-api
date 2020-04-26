import { ObjectId } from 'mongoose';
const dbModel = {
    mobile: {type: String, required: true},
    type:{type: String,require:true},
    name:{type:String,required:true},
    imageUrl:{type:String},
    code:{type:Number},
    specialization:{type:ObjectId,ref:'specializations'},
    price:{type:Number},
    currency:{type:Number,default:0,required:true},
    details:{
        type:{
            city:String,
            nezam_pezeshki_code:String,
            monthlyCut:Number,
            clinics:[{type:ObjectId,ref:'healthcenters'}],
            hospitals:[{type:ObjectId,ref:'healthcenters'}]
        }
    }
};

export default dbModel;
