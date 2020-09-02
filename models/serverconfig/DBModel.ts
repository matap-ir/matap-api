import { ObjectId } from 'mongoose';
const dbModel = {
    iceServers:{
        type:[{username: String,credential:String,urls:[String]}]
    },
    mediaConstraints:Object,
    forceSpeaker:Boolean,
    termsandconditions: String,
    android:{
        forceUpdate:{type:Boolean,required:true},
        versionCode:{type:String,required:true},
        downloadLink:{type:String,required:true},
        changeLog:{type:String,required:true}
    },
    ios:{
        forceUpdate:{type:Boolean,required:true},
        versionCode:{type:String,required:true},
        downloadLink:{type:String,required:true},
        changeLog:{type:String,required:true}
    }
};

export default dbModel;
