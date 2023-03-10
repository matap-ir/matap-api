import {ObjectId} from '../../mongoose-types';

const dbModel = {
    title:{type:String,required:true},
    body:{type:String,required:true},
    successCount:{type:Number,required: true},
    date:{type:Number,required:true},
    sender:{type:ObjectId,required:true,ref:'admins'},
    state:{type:String,required:true},
    link:{type:String,required:false}
};

export default dbModel;
