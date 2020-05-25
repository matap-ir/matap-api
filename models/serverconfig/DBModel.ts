import { ObjectId } from 'mongoose';
const dbModel = {
    iceServers:{
        type:{type:[{type:{username: String,credential:String,urls:[String],required:true}}]}
    }
};

export default dbModel;
