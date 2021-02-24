import { MediaConstraints } from '../conference/Conference';
export default interface ServerConfig {
    iceServers: {
        username: string;
        credential: string;
        urls: string[];
    }[];
    mediaConstraints: MediaConstraints;
    forceSpeaker: boolean;
    termsandconditions: string;
    retryThreshold: number;
    videoMaxBitrate: number | 'unlimited';
    audioMaxBitrate: number | 'unlimited';
    iceTransportPolicy: 'relay' | 'all';
    preferredCodecs: string[];
    trickleIce: boolean;
    conferencePingTimeout: number;
    android: {
        forceUpdate: boolean;
        versionCode: string;
        downloadLink: string;
        changeLog: string;
    };
    ios: {
        forceUpdate: boolean;
        versionCode: string;
        downloadLink: string;
        changeLog: string;
    };
}
