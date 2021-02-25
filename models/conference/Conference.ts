import {ConferenceMode, ConferenceType, ParticipantState} from '../Enums';
import Kit from 'javascript-dev-kit';
import ServerConfig from '../serverconfig/ServerConfig';
export interface MediaConstraints{
    video: any,
    audio: any
}
export interface Participant{
    id: string,
    state: ParticipantState,
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
}
export default class Conference{
    public id: string;
    public visitId: string;
    public createdAt: number;
    public type: ConferenceType;
    public mode: ConferenceMode;
    public iceServers: {username: string,credential:string,urls:string[]}[];
    public mediaConstraints: MediaConstraints;
    public videoCallVersion: string;
    public iceTransportPolicy: 'relay' | 'all';
    public videoMaxBitrate: number | 'unlimited';
    public audioMaxBitrate: number | 'unlimited';
    public preferredCodecs: string[];
    public trickleIce: boolean;
    public relations: string[] = [];
    public pingTimeout: number;
    public participants: Participant[] = [];

    constructor(visitId: string,type: ConferenceType,mode: ConferenceMode,version: string,config: ServerConfig) {
        this.id = Kit.generateUUID();
        this.visitId = visitId;
        this.createdAt = Date.now();
        this.mode = mode;
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

    /*public setStreamType(userId: string,streamType: StreamType){
        userId = String(userId);
        const participant = this.getParticipant(userId);
        if(participant){
            participant.streamType = streamType;
            return true;
        }
        return false;
    }*/

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
        return this.participants.find(m => m.id === userId);
    }

    public currentState(userId: string): 'initiator' | 'invited' | 'transmitting'{
        const participant = this.getParticipant(String(userId));
        if(!participant){
            return 'invited';
        }
        if(this.participants.length === 1){
            return 'initiator';
        }
        return 'transmitting';
    }

    public addParticipant(userId: string){
        userId = String(userId);
        let participant = this.getParticipant(userId);
        if(!participant){
            participant = {
                id: userId,
                state: 'connecting',
                joinedAt: Date.now(),
                pingInfo:{}
            }
            this.participants.push(participant)
            this.participants.forEach((p)=>{
                if(p.id !== userId && !this.isInitiator(p.id,userId) && !this.isInitiator(userId,p.id)){
                    this.setInitiator(userId,p.id);
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
                if(p.id !== userId && !this.isInitiator(p.id,userId) && !this.isInitiator(userId,p.id)){
                    this.relations.removeValue(p.id+'>'+userId);
                    this.relations.removeValue(userId+'>'+p.id);
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
