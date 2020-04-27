import { ObjectId } from 'mongoose';
import {VisitStatus} from '../Enums';

export default{
    patient:{type:ObjectId,ref:'users',required:true,unique:true},
    doctor:{type:ObjectId,ref:'users',required:true},
    discount:{type:ObjectId,ref:'discount_coupons'},
    state:{type:String,required:true,default:VisitStatus.IN_QUEUE},
    initiate_date:{type:Number,required: true},
    start_date:{type:Number,required: true},
    conversations:[{delivered:{type:[String],default: []},chat:require('../chat/DBModel').default}]
}
