import { CallMetricsEvent } from '../Enums';
declare class AbstractCallMetric<T extends any> {
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
declare class CameraSwitchClicked extends AbstractCallMetric<{
    currentDirection: 'front' | 'back';
}> {
    constructor(sessionId: string, data: {
        currentDirection: 'front' | 'back';
    });
}
declare class MuteClicked extends AbstractCallMetric<{
    isMuted: boolean;
}> {
    constructor(sessionId: string, data: {
        isMuted: boolean;
    });
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
    enabled: boolean;
}> {
    constructor(sessionId: string, data: {
        enabled: boolean;
    });
}
declare class TrackCreated extends AbstractCallMetric<{
    kind: 'audio' | 'video';
}> {
    constructor(sessionId: string, data: {
        kind: 'audio' | 'video';
    });
}
declare class TrackStopped extends AbstractCallMetric<{
    kind: 'audio' | 'video';
}> {
    constructor(sessionId: string, data: {
        kind: 'audio' | 'video';
    });
}
declare class CallStateChange extends AbstractCallMetric<{
    before: 'connecting' | 'connected' | 'reconnecting';
    new: 'connecting' | 'connected' | 'reconnecting';
}> {
    constructor(sessionId: string, data: {
        before: 'connecting' | 'connected' | 'reconnecting';
        new: 'connecting' | 'connected' | 'reconnecting';
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
    candidate: string;
}> {
    constructor(sessionId: string, data: {
        candidate: string;
    });
}
declare class RTCIceCandidateError extends AbstractCallMetric<{
    error: string;
}> {
    constructor(sessionId: string, data: {
        error: string;
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
    constructor(sessionId: string, data: any);
}
declare class RTCSignalingStateChanged extends AbstractCallMetric<{
    from: string;
    to: string;
}> {
    constructor(sessionId: string, data: any);
}
declare class RTCTrack extends AbstractCallMetric<any> {
    constructor(sessionId: string, data: any);
}
declare class RTCRemovedFromElement extends AbstractCallMetric<{
    reason: string;
}> {
    constructor(sessionId: string, data: any);
}
declare class SocketStateChange extends AbstractCallMetric<{
    connected: boolean;
}> {
    constructor(sessionId: string, data: any);
}
declare class RingStateChange extends AbstractCallMetric<{
    ringing: boolean;
    isInitiator: boolean;
}> {
    constructor(sessionId: string, data: any);
}
declare class CallClosed extends AbstractCallMetric<{
    reason: string;
}> {
    constructor(sessionId: string, data: {
        reason: string;
    });
}
declare class Log extends AbstractCallMetric<string> {
    constructor(sessionId: string, data: string);
}
declare class LocalStreamsGathered extends AbstractCallMetric<{
    audio: boolean;
    video: boolean;
}> {
    constructor(sessionId: string, data: {
        audio: boolean;
        video: boolean;
    });
}
declare class NetworkStateChanged extends AbstractCallMetric<{
    connected: boolean;
}> {
    constructor(sessionId: string, data: {
        connected: boolean;
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
    CameraSwitchClicked: typeof CameraSwitchClicked;
    MuteClicked: typeof MuteClicked;
    AudioRouteChanged: typeof AudioRouteChanged;
    TrackStateChange: typeof TrackStateChange;
    CallStateChange: typeof CallStateChange;
    RTCRemovedFromElement: typeof RTCRemovedFromElement;
    RTCTrack: typeof RTCTrack;
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
    LocalStreamsGathered: typeof LocalStreamsGathered;
    NetworkStateChanged: typeof NetworkStateChanged;
    TrackStopped: typeof TrackStopped;
    TrackCreated: typeof TrackCreated;
};
export default _default;
