import { ObjectId } from 'mongoose';

export default{
    patient:{type:ObjectId,ref:'users'},
    doctor:{type:ObjectId,ref:'users'},
    discount:{type:ObjectId,ref:'discount_coupons'},
    state:{type:String,required:true,default:'IN_QUEUE'},
    initiate_date:{type:Number,required: true},
    start_date:{type:Number,required: true},
    conversations:[{delivered:{type:[String],default: []},chat:require('../chat/DBModel').default}]
}
