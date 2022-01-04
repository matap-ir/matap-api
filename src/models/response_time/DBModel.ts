import {ObjectId} from '../../../mongoose-types';

const dbModel = {
    from: {type: {hour:String, minute:String},required:true},
    to: {type: {hour:String, minute:String},required:true},
    healthCenter: {type: ObjectId,ref:'healthcenters',required:false}
};

export default dbModel;
