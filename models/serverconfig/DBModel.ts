import { ObjectId } from 'mongoose';
const dbModel = {
    iceServers:{
        type:[{username: String,credential:String,urls:[String]}]
    }
};

export default dbModel;
