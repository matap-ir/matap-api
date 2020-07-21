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
    gender:{type:String,default:''},
    details:{
        type:{
            maxVisitDurationMillisec: {type:Number,required:true},
            city:String,
            shaba:String,
            nezam_pezeshki_code:String,
            cut:Number,
            clinics:[{type:ObjectId,ref:'healthcenters'}],
            hospitals:[{type:ObjectId,ref:'healthcenters'}],
            response_days:{
                type:{
                    0: [require('../response_time/ResponseTime').default],
                    1: [require('../response_time/ResponseTime').default],
                    2: [require('../response_time/ResponseTime').default],
                    3: [require('../response_time/ResponseTime').default],
                    4: [require('../response_time/ResponseTime').default],
                    5: [require('../response_time/ResponseTime').default],
                    6: [require('../response_time/ResponseTime').default],
                },
                required: true,
                default:{
                    0: [],
                    1: [],
                    2: [],
                    3: [],
                    4: [],
                    5: [],
                    6: [],
                }
            }
        }
    }
};

export default dbModel;
