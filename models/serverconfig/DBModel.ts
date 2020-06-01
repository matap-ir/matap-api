import { ObjectId } from 'mongoose';
const dbModel = {
    iceServers:{
        type:[{username: String,credential:String,urls:[String]}]
    },
    mediaConstraints:Object,
    forceSpeaker:Boolean
};

export default dbModel;
