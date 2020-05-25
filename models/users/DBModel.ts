import { ObjectId } from 'mongoose';
const dbModel = {
    mobile: {type: String, required: true},
    type:{type: String,require:true},
    name:{type:String,required:true},
    imageUrl:{type:String},
    code:{type:Number,index:true,unique:true,sparse:true},
    specialization:{type:ObjectId,ref:'specializations'},
    price:{type:Number},
    currency:{type:Number,default:0,required:true},
    ready:{type:Boolean,default: false},
    sms_code:{type:String,required:false},
    fcmtoken:{type:String,required:false},
    finalizable_visits:{type: [String],default:[]},
    details:{
        type:{
            city:String,
            nezam_pezeshki_code:String,
            monthlyCut:Number,
            clinics:[{type:ObjectId,ref:'healthcenters'}],
            hospitals:[{type:ObjectId,ref:'healthcenters'}],
            response_days:{type:String,required:false}
        }
    }
};

export default dbModel;
