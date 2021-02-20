export default interface ServerConfig {
    iceServers: {
        username: string;
        credential: string;
        urls: string[];
    }[];
    mediaConstraints: {};
    forceSpeaker: boolean;
    termsandconditions: string;
    retryThreshold: number;
    videoMaxBitrate: number | 'unlimited';
    audioMaxBitrate: number | 'unlimited';
    preferredCodecs: string[];
    trickleIce: boolean;
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
