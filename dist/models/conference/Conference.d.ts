import { ConferenceType, StreamType } from '../Enums';
import ServerConfig from '../serverconfig/ServerConfig';
export interface MediaConstraints {
    video: any;
    audio: any;
}
export default class Conference {
    _id: string;
    createdAt: number;
    type: ConferenceType;
    mediaConstraints: MediaConstraints;
    version: string;
    videoMaxBitrate: number | 'unlimited';
    audioMaxBitrate: number | 'unlimited';
    preferredCodecs: string[];
    trickleIce: boolean;
    relations: string[];
    pingTimeout: number;
    participants: {
        _id: string;
        streamType: StreamType;
        state: 'connecting' | 'reconnecting' | 'connected' | 'interrupted' | 'paused';
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
    }[];
    constructor(type: ConferenceType, version: string, config: ServerConfig);
    setStreamType(userId: string, streamType: StreamType): boolean;
    setClientInfo(userId: string, info: string, connectionType: string, transportType: 'udp' | 'tcp'): boolean;
    getParticipant(userId: string): {
        _id: string;
        streamType: StreamType;
        state: "interrupted" | "paused" | "connecting" | "connected" | "reconnecting";
        joinedAt: number;
        clientInfo?: string | undefined;
        transportType?: "tcp" | "udp" | undefined;
        connectionType?: string | undefined;
        pingInfo: {
            turn?: number | "timeout" | undefined;
            signaler?: number | "timeout" | undefined;
            turnLastPingDate?: number | undefined;
            signalerLastPingDate?: number | undefined;
        };
    } | undefined;
    addParticipant(userId: string, streamType: StreamType): boolean;
    removeParticipant(userId: string): boolean;
    setTurnPing(userId: string, ping: number | 'timeout'): boolean;
    setSignalerPing(userId: string, ping: number | 'timeout'): boolean;
    setInitiator(initiatorId: string, targetId: string): this;
    isInitiator(myId: string, otherId: string): boolean;
}
