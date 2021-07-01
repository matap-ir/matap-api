import {ConferenceMode, ConferenceType, ParticipantState, UserType} from '../Enums';
import Kit from 'javascript-dev-kit';
import ServerConfig from '../serverconfig/ServerConfig';
export interface MediaConstraints{
    video: any,
    audio: any
}
export interface Participant{
    id: string,
    state: ParticipantState,
    name: string,
    userType: UserType,
    clientInfo: {
        device:{os: string,version: string},
        browser?: { platform: string,version: string }
    }
}
export default class Conference{
    public id: string;
    public host: string;
    public visitId: string;
    public createdAt: number;
    public type: ConferenceType;
    public initiator: Participant;
    public receiver: Participant;
    public iceServers: {username: string,credential:string,urls:string[]}[];
    public mediaConstraints: MediaConstraints;
    public videoCallVersion: string;
    public retryThreshold: number;
    public state: 'initiating' | 'transmitting' | 'ended';
    public iceTransportPolicy: 'relay' | 'all';
    public videoMaxBitrate: number | 'unlimited';
    public audioMaxBitrate: number | 'unlimited';
    public preferredCodecs: string[];
    public trickleIce: boolean;
    public pingTimeout: number;
    public participants: Participant[] = [];
    public forceSpeaker: boolean;

    constructor(visitId: string,host: string,type: ConferenceType,videoCallVersion: string,config: ServerConfig,initiator: Participant,receiver: Participant) {
        this.id = Kit.generateUUID();
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

    public getParticipant(userId: string){
        userId = String(userId);
        return this.participants.find(m => m.id === userId);
    }
}
