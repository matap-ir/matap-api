import { ConferenceType, ParticipantState, UserType } from '../Enums';
import ServerConfig from '../serverconfig/ServerConfig';
import { AbstractCallMetric } from '../analytics/call-analytics/CallAnalytics';
export declare class MediaConstraints {
    video: any;
    audio: any;
}
export interface Participant {
    id: string;
    state: ParticipantState;
    name: string;
    mobile: string;
    userType: UserType;
    deviceInfo: {
        brand: string;
        designName: string;
        deviceName: string;
        deviceYearClass: string;
        isDevice: boolean;
        deviceType: string;
        manufacturer: string;
        modelId: string;
        modelName: string;
        osName: string;
        osVersion: string;
        platformApiLevel: number;
        supportedCpuArchitectures: string[];
    };
}
export default class Conference {
    id: string;
    host: string;
    visitId: string;
    createdAt: number;
    endedAt: number;
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
    forceSpeaker: boolean;
    events: AbstractCallMetric<any>[];
    constructor(visitId: string, host: string, type: ConferenceType, videoCallVersion: string, config: ServerConfig, initiator: Participant, receiver: Participant);
}
