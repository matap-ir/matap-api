import {MediaConstraints} from '../conference/Conference';
import {ObjectId, Prop, Schema} from '../../mongoose-types';
import mongoose from 'mongoose';

class IceServer{
    @Prop()
    username: string;

    @Prop()
    credential:string;

    @Prop({type:[String]})
    urls:string[]
}

class AndroidType{
    @Prop()
    forceUpdate:boolean;
    @Prop()
    versionCode:string;
    @Prop()
    downloadLink: string;
    @Prop()
    changeLog: string;
}

class IosType{
    @Prop()
    forceUpdate:boolean;
    @Prop()
    versionCode:string;
    @Prop()
    downloadLink: string;
    @Prop()
    changeLog: string;
}

@Schema()
export default class ServerConfig {
    @Prop({type: ()=> [IceServer]})
    iceServers: IceServer[];

    @Prop({type: ()=> MediaConstraints})
    mediaConstraints: MediaConstraints;

    @Prop()
    forceSpeaker: boolean;

    @Prop()
    termsandconditions: string;

    @Prop()
    excludedReservationDates: string[];

    @Prop()
    retryThreshold: number;

    @Prop({type: {}})
    videoMaxBitrate: number | 'unlimited';

    @Prop({type: {}})
    audioMaxBitrate: number | 'unlimited';

    @Prop()
    iceTransportPolicy: 'relay' | 'all';

    @Prop()
    preferredCodecs: string[];

    @Prop()
    trickleIce: boolean;

    @Prop()
    conferencePingTimeout: number;

    @Prop({type: ()=> AndroidType})
    android: AndroidType;

    @Prop({type: ()=> IosType})
    ios:IosType;
}
