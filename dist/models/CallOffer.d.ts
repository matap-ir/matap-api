interface CallOffer {
    id: string;
    host: string;
    type: 'video/audio' | 'audio';
    state: 'initiating' | 'transmitting' | 'ended';
    initiateDate: number;
    iceServers: {
        username: string;
        credential: string;
        urls: string[];
    }[];
    initiator: {
        id: string;
    };
    receiver: {
        id: string;
    };
    mediaConstraints: {};
    retryThreshold: number;
    forceSpeaker: boolean;
    videoCallVersion: number;
    videoMaxBitrate: number | 'unlimited';
    audioMaxBitrate: number | 'unlimited';
    preferredCodecs: string[];
}
export default CallOffer;
