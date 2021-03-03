import { MediaConstraints, Participant } from './Conference';
import { ConferenceType } from '../Enums';
import ServerConfig from '../serverconfig/ServerConfig';
export default class P2PSessionConfig {
    id: string;
    host: string;
    type: ConferenceType;
    state: 'initiating' | 'transmitting' | 'ended';
    iceTransportPolicy: 'relay' | 'all';
    createdAt: number;
    iceServers: {
        username: string;
        credential: string;
        urls: string[];
    }[];
    initiator: Participant;
    receiver: Participant;
    mediaConstraints: MediaConstraints;
    retryThreshold: number;
    forceSpeaker: boolean;
    videoCallVersion: number;
    videoMaxBitrate: number | 'unlimited';
    audioMaxBitrate: number | 'unlimited';
    preferredCodecs: string[];
    trickleIce: boolean;
    pingTimeout: number;
    constructor(type: ConferenceType, version: number, config: ServerConfig, initiator: Participant, receiver: Participant, host: string);
}
