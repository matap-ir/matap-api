import {Schema} from 'mongoose';
import IssuerModel from '../issuer/DBModel';
import {ObjectId} from '../../mongoose-types';

const dbModel = {
    requestDate: {type: Number,required: true},
    issuer: IssuerModel,
    doctor: {type:ObjectId,required: true,ref:'users'},
    state: {type: String,required: true},
    timeLine: {type: [Schema.Types.Mixed],required: true,default:[]},
    type: {type: String,required: true},
    otherInfos: {type: Schema.Types.Mixed,required: false},
    trackingCode: {type: String,required: true,unique: true},
    due:{
        type:{
            date:{
                type:{
                    from:{type: Number,required:true},
                    to:{type:Number,required:true}
                },
                required:true
            },
            message:{type: Number,required: true}
        },
        required: false
    }
};

export default dbModel;
