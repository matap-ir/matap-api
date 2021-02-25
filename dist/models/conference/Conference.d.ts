import { ConferenceMode, ConferenceType, ParticipantState } from '../Enums';
import ServerConfig from '../serverconfig/ServerConfig';
export interface MediaConstraints {
    video: any;
    audio: any;
}
export interface Participant {
    id: string;
    state: ParticipantState;
    joinedAt: number;
    clientInfo?: string;
    transportType?: 'udp' | 'tcp';
    connectionType?: string;
    pingInfo: {
        turn?: number | 'timeout';
        signaler?: number | 'timeout';
        turnLastPingDate?: number;
        signalerLastPingDate?: number;
    };
}
export default class Conference {
    id: string;
    visitId: string;
    createdAt: number;
    type: ConferenceType;
    mode: ConferenceMode;
    iceServers: {
        username: string;
        credential: string;
        urls: string[];
    }[];
    mediaConstraints: MediaConstraints;
    videoCallVersion: string;
    iceTransportPolicy: 'relay' | 'all';
    videoMaxBitrate: number | 'unlimited';
    audioMaxBitrate: number | 'unlimited';
    preferredCodecs: string[];
    trickleIce: boolean;
    relations: string[];
    pingTimeout: number;
    participants: Participant[];
    constructor(visitId: string, type: ConferenceType, mode: ConferenceMode, version: string, config: ServerConfig);
    setClientInfo(userId: string, info: string, connectionType: string, transportType: 'udp' | 'tcp'): boolean;
    getParticipant(userId: string): Participant | undefined;
    currentState(userId: string): 'initiator' | 'invited' | 'transmitting';
    addParticipant(userId: string): false | Participant;
    removeParticipant(userId: string): boolean;
    setTurnPing(userId: string, ping: number | 'timeout'): boolean;
    setSignalerPing(userId: string, ping: number | 'timeout'): boolean;
    setInitiator(initiatorId: string, targetId: string): this;
    isInitiator(myId: string, otherId: string): boolean;
}
