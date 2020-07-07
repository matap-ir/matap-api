import { ObjectId } from 'mongoose';
import {VisitStatus} from '../Enums';

export default{
    patient:{type:ObjectId,ref:'users',required:true},
    doctor:{type:ObjectId,ref:'users',required:true},
    discount:{type:ObjectId,ref:'discount_coupons'},
    state:{type:String,required:true,default:VisitStatus.IN_QUEUE},
    initiate_date:{type:Number,required: true},
    start_date:{type:Number},
    end_date:{type:Number},
    duration_limit:{type:Number,required:true,default:0},
    conversations:[{delivered:{type:[String],default: []},chat:require('../chat/DBModel').default}],
    rating:{type:require('../rating/DBModel').default,required:false},
    chatting:{type:Boolean,default:false},
    receipt:{
        transaction_id:{type:String,required:false},
        total: {type:Number,required:false},
        paid: {type:Number,required:false},
        doctorCut: {type:Number,required:false},
        healthCenterCut: {type:Number,required:false},
        healthCenterId: {type: ObjectId,required:false},
        discount: {type:Number,required:false},
        return_transaction_id:{type: String,required:false}
    }
}
