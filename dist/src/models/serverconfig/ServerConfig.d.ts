import { MediaConstraints } from '../conference/Conference';
declare class IceServer {
    username: string;
    credential: string;
    urls: string[];
}
declare class AndroidType {
    forceUpdate: boolean;
    versionCode: string;
    downloadLink: string;
    changeLog: string;
}
declare class IosType {
    forceUpdate: boolean;
    versionCode: string;
    downloadLink: string;
    changeLog: string;
}
export default class ServerConfig {
    iceServers: IceServer[];
    mediaConstraints: MediaConstraints;
    forceSpeaker: boolean;
    termsandconditions: string;
    excludedReservationDates: string[];
    retryThreshold: number;
    videoMaxBitrate: number | 'unlimited';
    audioMaxBitrate: number | 'unlimited';
    iceTransportPolicy: 'relay' | 'all';
    preferredCodecs: string[];
    trickleIce: boolean;
    conferencePingTimeout: number;
    android: AndroidType;
    ios: IosType;
}
export {};
