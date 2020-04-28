import { ObjectId } from 'mongoose';
const dbModel = {
    amount:{type:Number,required:true},
    type:{type:String,required: true},
    tracking_code:{type:String},
    date:{type:Number,required:true},
    hint:{type:String,default:''},
    issuer:{
        type:{
            type:{type:String,required:true},
            id:{type:String,required:true},
            name:{type:String,required:true}
        },
        required:true
    },
};

export default dbModel;
