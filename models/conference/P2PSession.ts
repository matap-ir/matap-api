import {MediaConstraints, Participant} from './Conference';
import {ConferenceType} from '../Enums';
import ServerConfig from '../serverconfig/ServerConfig';
import Kit from 'javascript-dev-kit';

export default class P2PSession {
    public id: string;
    public host: string;
    public type: ConferenceType;
    public state: 'initiating' | 'transmitting' | 'ended' = 'initiating';
    public iceTransportPolicy: 'relay' | 'all';
    public createdAt: number;
    public iceServers:{username: string,credential:string,urls:string[]}[];
    public initiator: Participant;
    public receiver: Participant;
    public mediaConstraints:MediaConstraints;
    public retryThreshold: number;
    public forceSpeaker: boolean;
    public videoCallVersion: number;
    public videoMaxBitrate: number | 'unlimited';
    public audioMaxBitrate: number | 'unlimited';
    public preferredCodecs: string[];
    public trickleIce: boolean;
    public pingTimeout: number;

    constructor(type: ConferenceType,version: number,config: ServerConfig,initiator: Participant,receiver: Participant,host: string) {
        this.id = Kit.generateUUID();
        this.retryThreshold = config.retryThreshold;
        this.forceSpeaker = config.forceSpeaker;
        this.host = host;
        this.initiator = initiator;
        this.receiver = receiver;
        this.createdAt = Date.now();
        this.type = type;
        this.mediaConstraints = config.mediaConstraints;
        this.videoCallVersion = version;
        this.iceTransportPolicy = config.iceTransportPolicy;
        this.videoMaxBitrate = config.videoMaxBitrate;
        this.audioMaxBitrate = config.audioMaxBitrate;
        this.trickleIce = config.trickleIce;
        this.preferredCodecs = config.preferredCodecs;
        this.pingTimeout = config.conferencePingTimeout;
        this.iceServers = config.iceServers;
    }
}

