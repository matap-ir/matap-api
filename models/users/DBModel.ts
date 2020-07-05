import { ObjectId } from 'mongoose';
const dbModel = {
    mobile: {type: String,index:true,unique:true, required: true},
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
    gender:{type:String,required:true,default:''},
    details:{
        type:{
            city:String,
            nezam_pezeshki_code:String,
            monthlyCut:Number,
            clinics:[{type:ObjectId,ref:'healthcenters'}],
            hospitals:[{type:ObjectId,ref:'healthcenters'}],
            response_days:{
                type:{
                    0: String,
                    1: String,
                    2: String,
                    3: String,
                    4: String,
                    5: String,
                    6: String,
                },
                required: true,
                default:{
                    0: '',
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                    5: '',
                    6: '',
                }
            }
        }
    }
};

export default dbModel;
