import { ObjectId } from 'mongoose';

export default{
    patient:{type:ObjectId,ref:'user'},
    doctor:{type:ObjectId,ref:'user'},
    discount:{type:ObjectId,ref:'discount_coupons'},
    state:{type:String,required:true,default:'IN_QUEUE'},
    start_date:{type:Number,required: true},
    conversations:[{delivered:{type:[String],default: []},chat:require('../chat/DBModel').default}]
}
