import { CallMetricsEvent } from '../../Enums';
export declare class AbstractCallMetric<T extends any> {
    readonly sessionId: string;
    readonly userId: string;
    readonly event: CallMetricsEvent;
    readonly data?: T;
    readonly timeStamp: number;
    constructor(sessionId: string, event: CallMetricsEvent, data?: T);
}
declare class Stats extends AbstractCallMetric<{
    local: {
        audio: {
            inbound: InBoundAudioType[];
            outbound: OutBoundAudioType[];
        };
        video: {
            inbound: InBoundVideoType[];
            outbound: OutBoundVideoType[];
        };
    };
    remote: {
        audio: {
            inbound: InBoundAudioType[];
            outbound: OutBoundAudioType[];
        };
        video: {
            inbound: InBoundVideoType[];
            outbound: OutBoundVideoType[];
        };
    };
}> {
    constructor(sessionId: string, stats: any);
}
declare class Error extends AbstractCallMetric<{
    info: string;
    error: any;
}> {
    constructor(sessionId: string, info: string, error: Error);
}
declare class AudioRouteChanged extends AbstractCallMetric<{
    availableDevices: string[];
    selectedRoute: string;
}> {
    constructor(sessionId: string, data: {
        availableDevices: string[];
        selectedRoute: string;
    });
}
declare class TrackStateChange extends AbstractCallMetric<{
    kind: 'video' | 'audio';
    enabled: boolean;
    local: boolean;
}> {
    constructor(sessionId: string, data: {
        kind: 'video' | 'audio';
        enabled: boolean;
        local: boolean;
    });
}
declare class TrackCreated extends AbstractCallMetric<{
    kind: 'audio' | 'video';
    local: boolean;
}> {
    constructor(sessionId: string, data: {
        kind: 'audio' | 'video';
        local: boolean;
    });
}
declare class TrackStopped extends AbstractCallMetric<{
    kind: 'audio' | 'video';
    local: boolean;
}> {
    constructor(sessionId: string, data: {
        kind: 'audio' | 'video';
        local: boolean;
    });
}
declare class CallStateChange extends AbstractCallMetric<{
    from: 'connecting' | 'connected' | 'reconnecting';
    to: 'connecting' | 'connected' | 'reconnecting';
}> {
    constructor(sessionId: string, data: {
        from: 'connecting' | 'connected' | 'reconnecting';
        to: 'connecting' | 'connected' | 'reconnecting';
    });
}
declare class RTCConnectionStateChange extends AbstractCallMetric<{
    from: string;
    to: string;
}> {
    constructor(sessionId: string, data: {
        from: string;
        to: string;
    });
}
declare class RTCIceCandidate extends AbstractCallMetric<{
    candidate: any;
}> {
    constructor(sessionId: string, data: {
        candidate: any;
    });
}
declare class RTCIceCandidateError extends AbstractCallMetric<{
    errorCode: string;
    errorText: string;
    hostCandidate: string;
    url: string;
}> {
    constructor(sessionId: string, data: {
        errorCode: string;
        errorText: string;
        hostCandidate: string;
        url: string;
    });
}
declare class RTCIceConnectionStateChange extends AbstractCallMetric<{
    from: string;
    to: string;
}> {
    constructor(sessionId: string, data: {
        from: string;
        to: string;
    });
}
declare class RTCIceGatheringStateChange extends AbstractCallMetric<{
    from: string;
    to: string;
}> {
    constructor(sessionId: string, data: {
        from: string;
        to: string;
    });
}
declare class RTCNegotiationNeeded extends AbstractCallMetric<any> {
    constructor(sessionId: string);
}
declare class RTCSignalingStateChanged extends AbstractCallMetric<{
    from: string;
    to: string;
}> {
    constructor(sessionId: string, data: any);
}
declare class SocketStateChange extends AbstractCallMetric<{
    state: string;
}> {
    constructor(sessionId: string, data: {
        state: string;
    });
}
declare class RingStateChange extends AbstractCallMetric<{
    ringing: boolean;
    isInitiator: boolean;
}> {
    constructor(sessionId: string, data: {
        ringing: boolean;
        isInitiator: boolean;
    });
}
declare class CallClosed extends AbstractCallMetric<{
    reason: string;
    isFromOtherSide: boolean;
}> {
    constructor(sessionId: string, data: {
        reason: string;
        isFromOtherSide: boolean;
    });
}
declare class Log extends AbstractCallMetric<string> {
    constructor(sessionId: string, data: string);
}
declare class NetworkStateChanged extends AbstractCallMetric<{
    connected: boolean;
}> {
    constructor(sessionId: string, data: {
        connected: boolean;
    });
}
declare class ClientInfo extends AbstractCallMetric<{
    os: string;
    version: string;
    browser?: {
        platform: string;
        version: string;
    };
}> {
    constructor(sessionId: string, data: {
        os: string;
        version: string;
        browser?: {
            platform: string;
            version: string;
        };
    });
}
interface InBoundAudioType {
    lastPacketReceivedTimestamp: number;
    bytesReceived: number;
    bitrate: number;
    jitter: number;
    jitterBufferDelay: number;
    packetsLost: number;
    packetsReceived: number;
    headerBytesReceived: number;
    mimeType: string;
    kind: string;
}
interface OutBoundAudioType {
    packetsSent: number;
    bytesSent: number;
    headerBytesSent: number;
    mimeType: string;
    bitrate: number;
}
interface InBoundVideoType {
    frameHeight: number;
    frameWidth: number;
    framesDecoded: number;
    framesDropped: number;
    framesPerSecond: number;
    framesReceived: number;
    lastPacketReceivedTimestamp: number;
    bytesReceived: number;
    bitrate: number;
    jitter: number;
    jitterBufferDelay: number;
    packetsLost: number;
    packetsReceived: number;
    headerBytesReceived: number;
    mimeType: string;
    kind: string;
}
interface OutBoundVideoType {
    frameHeight: number;
    frameWidth: number;
    framesEncoded: number;
    framesPerSecond: number;
    framesSent: number;
    packetsSent: number;
    bytesSent: number;
    headerBytesSent: number;
    mimeType: string;
    bitrate: number;
}
declare const _default: {
    AbstractCallMetric: typeof AbstractCallMetric;
    Stats: typeof Stats;
    Error: typeof Error;
    AudioRouteChanged: typeof AudioRouteChanged;
    TrackStateChange: typeof TrackStateChange;
    CallStateChange: typeof CallStateChange;
    RTCSignalingStateChanged: typeof RTCSignalingStateChanged;
    RTCNegotiationNeeded: typeof RTCNegotiationNeeded;
    RTCIceGatheringStateChange: typeof RTCIceGatheringStateChange;
    RTCIceCandidateError: typeof RTCIceCandidateError;
    RTCIceCandidate: typeof RTCIceCandidate;
    RTCIceConnectionStateChange: typeof RTCIceConnectionStateChange;
    RTCConnectionStateChange: typeof RTCConnectionStateChange;
    SocketStateChange: typeof SocketStateChange;
    RingStateChange: typeof RingStateChange;
    CallClosed: typeof CallClosed;
    Log: typeof Log;
    NetworkStateChanged: typeof NetworkStateChanged;
    TrackStopped: typeof TrackStopped;
    TrackCreated: typeof TrackCreated;
    ClientInfo: typeof ClientInfo;
};
export default _default;
