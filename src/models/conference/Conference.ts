import {ConferenceMode, ConferenceType, ParticipantState, UserType} from '../Enums';
import Kit from 'javascript-dev-kit';
import ServerConfig from '../serverconfig/ServerConfig';
import {AbstractCallMetric} from '../analytics/call-analytics/CallAnalytics';
import {ObjectId, Prop, Schema} from '../../mongoose-types';

export class MediaConstraints{
    @Prop({type: {}})
    video: any;

    @Prop({type: {}})
    audio: any;
}
export interface Participant{
    id: string,
    state: ParticipantState,
    name: string,
    mobile: string,
    userType: UserType,
    deviceInfo: {
        brand: string,
        designName: string,
        deviceName: string,
        deviceYearClass: string,
        isDevice: boolean,
        deviceType: string,
        manufacturer: string,
        modelId: string,
        modelName: string,
        osName: string,
        osVersion: string,
        platformApiLevel: number,
        supportedCpuArchitectures: string[]
    }
}

@Schema()
export default class Conference{

    @Prop({required: true,index: true, unique: true})
    public id: string;

    @Prop({required: true})
    public host: string;

    @Prop({required: true, index: true})
    public visitId: string;

    @Prop({required: true})
    public createdAt: number;

    @Prop()
    public endedAt!: number;

    @Prop({required: true})
    public type: ConferenceType;

    @Prop({type: {},required: true})
    public initiator: Participant;

    @Prop({type: {},required: true})
    public receiver: Participant;

    @Prop({type: {},required: true})
    public iceServers: {username: string,credential:string,urls:string[]}[];

    @Prop({type: {},required: true})
    public mediaConstraints: MediaConstraints;

    @Prop({required: true})
    public videoCallVersion: string;

    @Prop({required: true})
    public retryThreshold: number;

    @Prop({required: true, index: true})
    public state: 'initiating' | 'transmitting' | 'ended';

    @Prop({required: true})
    public iceTransportPolicy: 'relay' | 'all';

    @Prop({type: {}})
    public videoMaxBitrate: number | 'unlimited';

    @Prop({type: {}})
    public audioMaxBitrate: number | 'unlimited';

    @Prop({type: {},required: true})
    public preferredCodecs: string[];

    @Prop({required: true})
    public trickleIce: boolean;

    @Prop()
    public pingTimeout: number;

    @Prop({required: true})
    public forceSpeaker: boolean;

    @Prop({type: {},required: true})
    public events: AbstractCallMetric<any>[] = [];

    constructor(visitId: string,host: string,type: ConferenceType,videoCallVersion: string,config: ServerConfig,initiator: Participant,receiver: Participant) {
        this.id = String(Kit.generateUUID());
        this.initiator = initiator;
        this.host = host;
        this.receiver = receiver;
        this.visitId = visitId;
        this.createdAt = Date.now();
        this.type = type;
        this.mediaConstraints = config.mediaConstraints;
        this.videoCallVersion = videoCallVersion;
        this.iceTransportPolicy = config.iceTransportPolicy;
        this.videoMaxBitrate = config.videoMaxBitrate;
        this.audioMaxBitrate = config.audioMaxBitrate;
        this.trickleIce = config.trickleIce;
        this.preferredCodecs = config.preferredCodecs;
        this.pingTimeout = config.conferencePingTimeout;
        this.iceServers = config.iceServers;
        this.forceSpeaker = config.forceSpeaker;
        this.retryThreshold = config.retryThreshold;
        this.state ='initiating';
    }
}
