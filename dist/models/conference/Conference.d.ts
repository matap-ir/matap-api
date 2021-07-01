import { ConferenceType, ParticipantState, UserType } from '../Enums';
import ServerConfig from '../serverconfig/ServerConfig';
export interface MediaConstraints {
    video: any;
    audio: any;
}
export interface Participant {
    id: string;
    state: ParticipantState;
    name: string;
    userType: UserType;
    clientInfo: {
        device: {
            os: string;
            version: string;
        };
        browser?: {
            platform: string;
            version: string;
        };
    };
}
export default class Conference {
    id: string;
    host: string;
    visitId: string;
    createdAt: number;
    type: ConferenceType;
    initiator: Participant;
    receiver: Participant;
    iceServers: {
        username: string;
        credential: string;
        urls: string[];
    }[];
    mediaConstraints: MediaConstraints;
    videoCallVersion: string;
    retryThreshold: number;
    state: 'initiating' | 'transmitting' | 'ended';
    iceTransportPolicy: 'relay' | 'all';
    videoMaxBitrate: number | 'unlimited';
    audioMaxBitrate: number | 'unlimited';
    preferredCodecs: string[];
    trickleIce: boolean;
    pingTimeout: number;
    participants: Participant[];
    forceSpeaker: boolean;
    constructor(visitId: string, host: string, type: ConferenceType, videoCallVersion: string, config: ServerConfig, initiator: Participant, receiver: Participant);
    getParticipant(userId: string): Participant | undefined;
}
