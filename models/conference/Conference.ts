import {ConferenceType, StreamType} from '../Enums';
import Kit from 'javascript-dev-kit';
import ServerConfig from '../serverconfig/ServerConfig';
export interface MediaConstraints{
    video: any,
    audio: any
}
export default class Conference{
    public _id: string;
    public visitId: string;
    public createdAt: number;
    public type: ConferenceType;
    public mediaConstraints: MediaConstraints;
    public version: string;
    public videoMaxBitrate: number | 'unlimited';
    public audioMaxBitrate: number | 'unlimited';
    public preferredCodecs: string[];
    public trickleIce: boolean;
    public relations: string[] = [];
    public pingTimeout: number;
    public participants: {
        _id: string,
        streamType: StreamType,
        state: 'connecting' | 'reconnecting' | 'connected' | 'interrupted' | 'paused',
        joinedAt: number,
        clientInfo?: string,
        transportType?: 'udp' | 'tcp',
        connectionType?: string,
        pingInfo:{
            turn?: number | 'timeout';
            signaler?: number | 'timeout',
            turnLastPingDate?: number,
            signalerLastPingDate?: number,
        }
    }[] = [];

    constructor(visitId: string,type: ConferenceType,version: string,config: ServerConfig) {
        this._id = Kit.generateUUID();
        this.visitId = visitId;
        this.createdAt = Date.now();
        this.type = type;
        this.mediaConstraints = config.mediaConstraints;
        this.version = version;
        this.videoMaxBitrate = config.videoMaxBitrate;
        this.audioMaxBitrate = config.audioMaxBitrate;
        this.trickleIce = config.trickleIce;
        this.preferredCodecs = config.preferredCodecs;
        this.pingTimeout = config.conferencePingTimeout;
    }

    public setStreamType(userId: string,streamType: StreamType){
        userId = String(userId);
        const participant = this.getParticipant(userId);
        if(participant){
            participant.streamType = streamType;
            return true;
        }
        return false;
    }

    public setClientInfo(userId: string,info: string,connectionType: string,transportType: 'udp' | 'tcp'){
        userId = String(userId);
        const participant = this.getParticipant(userId);
        if(participant){
            participant.clientInfo = info;
            participant.connectionType = connectionType;
            participant.transportType = transportType;
            return true;
        }
        return false;
    }

    public getParticipant(userId: string){
        userId = String(userId);
        return this.participants.find(m => m._id === userId);
    }

    public addParticipant(userId: string,streamType: StreamType){
        userId = String(userId);
        let participant = this.getParticipant(userId);
        if(!participant){
            participant = {
                _id: userId,
                state: 'connecting',
                joinedAt: Date.now(),
                streamType,
                pingInfo:{}
            }
            this.participants.push(participant)
            this.participants.forEach((p)=>{
                if(p._id !== userId && !this.isInitiator(p._id,userId) && !this.isInitiator(userId,p._id)){
                    this.setInitiator(userId,p._id);
                }
            })
            return participant;
        }
        return false;
    }

    public removeParticipant(userId: string){
        userId = String(userId);
        const participant = this.getParticipant(userId);
        if(participant){
            this.participants.removeValue(participant);
            this.participants.forEach((p)=>{
                if(p._id !== userId && !this.isInitiator(p._id,userId) && !this.isInitiator(userId,p._id)){
                    this.relations.removeValue(p._id+'>'+userId);
                    this.relations.removeValue(userId+'>'+p._id);
                }
            })
            return true;
        }
        return false;
    };

    public setTurnPing(userId: string,ping: number | 'timeout'){
        userId = String(userId);
        const participant = this.getParticipant(userId);
        if(participant){
            participant.pingInfo.turn = ping;
            if(ping !== 'timeout'){
                participant.pingInfo.turnLastPingDate = Date.now();
            }
            return true;
        }
        return false;
    };

    public setSignalerPing(userId: string,ping: number | 'timeout'){
        userId = String(userId);
        const participant = this.getParticipant(userId);
        if(participant){
            participant.pingInfo.signaler = ping;
            if(ping !== 'timeout'){
                participant.pingInfo.signalerLastPingDate = Date.now();
            }
            return true;
        }
        return false;
    }

    public setInitiator(initiatorId: string,targetId: string){
        initiatorId = String(initiatorId);
        targetId = String(targetId);
        this.relations.splice(this.relations.indexOf(initiatorId+'>'+targetId),1);
        this.relations.splice(this.relations.indexOf(targetId+'>'+initiatorId),1);
        this.relations.push(initiatorId+'>'+targetId);
        return this;
    }

    public isInitiator(myId: string,otherId: string){
        return this.relations.includes(String(myId)+'>'+String(otherId));
    }
}
