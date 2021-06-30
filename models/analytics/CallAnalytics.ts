import {CallMetricsEvent, UserType} from '../Enums';

class AbstractCallMetric<T extends any>{
    public readonly sessionId: string;
    public readonly userId!: string;
    public readonly event: CallMetricsEvent;
    public readonly data?: T;
    public readonly timeStamp = Date.now();
    /*
    public readonly userType!: UserType;
    public readonly browser?:{
        platform: string,
        version: string
    }
    public readonly mobile?:{
        platform: string,
        osVersion: string
    }*/

    constructor(sessionId: string,event: CallMetricsEvent, data?: T) {
        this.sessionId = sessionId;
        this.event = event;
        this.data = data;
    }
}

class Stats extends AbstractCallMetric<{
    local:{
        audio:{inbound: InBoundAudioType[], outbound: OutBoundAudioType[] },
        video:{ inbound: InBoundVideoType[], outbound: OutBoundVideoType[] }
    },
    remote:{
        audio:{inbound: InBoundAudioType[], outbound: OutBoundAudioType[] },
        video:{ inbound: InBoundVideoType[], outbound: OutBoundVideoType[] }
    } }>{

    constructor(sessionId: string,stats) {
        super(sessionId,CallMetricsEvent.STATS,{
            local: {
                audio: {
                    inbound: stats.data.audio.inbound.map((s) => {
                        return {
                            lastPacketReceivedTimestamp: s.lastPacketReceivedTimestamp,
                            bytesReceived: s.bytesReceived,
                            bitrate: s.bitrate,
                            jitter: s.jitter,
                            jitterBufferDelay: s.jitterBufferDelay,
                            packetsLost: s.packetsLost,
                            packetsReceived: s.packetsReceived,
                            headerBytesReceived: s.headerBytesReceived,
                            mimeType: s.mimeType,
                            kind: s.kind
                        };
                    }),
                    outbound: stats.data.audio.outbound.map((s) => {
                        return {
                            packetsSent: s.packetsSent,
                            bytesSent: s.bytesSent,
                            headerBytesSent: s.headerBytesSent,
                            mimeType: s.mimeType,
                            bitrate: s.bitrate
                        };
                    })
                },
                video: {
                    inbound: stats.data.video.inbound.map((s) => {
                        return {
                            lastPacketReceivedTimestamp: s.lastPacketReceivedTimestamp,
                            bytesReceived: s.bytesReceived,
                            bitrate: s.bitrate,
                            jitter: s.jitter,
                            jitterBufferDelay: s.jitterBufferDelay,
                            packetsLost: s.packetsLost,
                            packetsReceived: s.packetsReceived,
                            headerBytesReceived: s.headerBytesReceived,
                            mimeType: s.mimeType,
                            kind: s.kind
                        };
                    }),
                    outbound: stats.data.video.outbound.map((s) => {
                        return {
                            frameHeight: s.frameHeight,
                            frameWidth: s.frameWidth,
                            framesEncoded: s.framesEncoded,
                            framesPerSecond: s.framesPerSecond,
                            framesSent: s.framesSent,
                            packetsSent: s.packetsSent,
                            bytesSent: s.bytesSent,
                            headerBytesSent: s.headerBytesSent,
                            mimeType: s.mimeType,
                            bitrate: s.bitrate
                        };
                    })
                }
            },
            remote: {
                audio: {
                    inbound: stats.data.remote.audio.inbound.map((s) => {
                        return {
                            lastPacketReceivedTimestamp: s.lastPacketReceivedTimestamp,
                            bytesReceived: s.bytesReceived,
                            bitrate: s.bitrate,
                            jitter: s.jitter,
                            jitterBufferDelay: s.jitterBufferDelay,
                            packetsLost: s.packetsLost,
                            packetsReceived: s.packetsReceived,
                            headerBytesReceived: s.headerBytesReceived,
                            mimeType: s.mimeType,
                            kind: s.kind
                        };
                    }),
                    outbound: stats.data.remote.audio.outbound.map((s) => {
                        return {
                            packetsSent: s.packetsSent,
                            bytesSent: s.bytesSent,
                            headerBytesSent: s.headerBytesSent,
                            mimeType: s.mimeType,
                            bitrate: s.bitrate
                        };
                    })
                },
                video: {
                    inbound: stats.data.remote.video.inbound.map((s) => {
                        return {
                            lastPacketReceivedTimestamp: s.lastPacketReceivedTimestamp,
                            bytesReceived: s.bytesReceived,
                            bitrate: s.bitrate,
                            jitter: s.jitter,
                            jitterBufferDelay: s.jitterBufferDelay,
                            packetsLost: s.packetsLost,
                            packetsReceived: s.packetsReceived,
                            headerBytesReceived: s.headerBytesReceived,
                            mimeType: s.mimeType,
                            kind: s.kind
                        };
                    }),
                    outbound: stats.data.remote.video.outbound.map((s) => {
                        return {
                            frameHeight: s.frameHeight,
                            frameWidth: s.frameWidth,
                            framesEncoded: s.framesEncoded,
                            framesPerSecond: s.framesPerSecond,
                            framesSent: s.framesSent,
                            packetsSent: s.packetsSent,
                            bytesSent: s.bytesSent,
                            headerBytesSent: s.headerBytesSent,
                            mimeType: s.mimeType,
                            bitrate: s.bitrate
                        };
                    })
                }
            }
        });
    }
}

class Error extends AbstractCallMetric<{ info: string,error: any }>{
        constructor(sessionId: string,info: string,error: Error) {
            super(sessionId,CallMetricsEvent.ERROR,{info, error});
        }
}

class CameraSwitchClicked extends AbstractCallMetric<{ currentDirection:'front' | 'back' }>{
    constructor(sessionId: string,data: { currentDirection:'front' | 'back' }) {
        super(sessionId,CallMetricsEvent.CAMERA_SWITCH_CLICKED,data);
    }
}

class MuteClicked extends AbstractCallMetric<{ isMuted: boolean }>{
    constructor(sessionId: string,data: { isMuted:boolean }) {
        super(sessionId,CallMetricsEvent.MUTE_CLICKED,data);
    }
}

class AudioRouteChanged extends AbstractCallMetric<{ availableDevices: string[],selectedRoute: string }>{
    constructor(sessionId: string,data: { availableDevices: string[],selectedRoute: string }) {
        super(sessionId,CallMetricsEvent.AUDIO_ROUTE_CHANGED,data);
    }
}

class TrackStateChange extends AbstractCallMetric<{ enabled: boolean }>{
    constructor(sessionId: string,data: { enabled: boolean }) {
        super(sessionId,CallMetricsEvent.TRACK_STATE_CHANGED,data);
    }
}

class TrackCreated extends AbstractCallMetric<{ kind: 'audio' | 'video' }>{
    constructor(sessionId: string,data: { kind: 'audio' | 'video' }) {
        super(sessionId,CallMetricsEvent.TRACK_CREATED,data);
    }
}

class TrackStopped extends AbstractCallMetric<{ kind: 'audio' | 'video' }>{
    constructor(sessionId: string,data: { kind: 'audio' | 'video' }) {
        super(sessionId,CallMetricsEvent.TRACK_STOPPED,data);
    }
}

class CallStateChange extends AbstractCallMetric<{ before: 'connecting' | 'connected' | 'reconnecting',new: 'connecting' | 'connected' | 'reconnecting'}>{
    constructor(sessionId: string,data: { before: 'connecting' | 'connected' | 'reconnecting',new: 'connecting' | 'connected' | 'reconnecting'}) {
        super(sessionId,CallMetricsEvent.CALL_STATE_CHANGED,data);
    }
}

class RTCConnectionStateChange extends AbstractCallMetric<{ from: string,to: string }>{
    constructor(sessionId: string,data: { from: string,to: string }) {
        super(sessionId,CallMetricsEvent.RTC_CONNECTION_STATE_CHANGED,data);
    }
}

class RTCIceCandidate extends AbstractCallMetric<{ candidate: string }>{
    constructor(sessionId: string,data: { candidate: string }) {
        super(sessionId,CallMetricsEvent.RTC_ICE_CANDIDATE,data);
    }
}

class RTCIceCandidateError extends AbstractCallMetric<{ error: string }>{
    constructor(sessionId: string,data: { error: string }) {
        super(sessionId,CallMetricsEvent.RTC_ICE_CANDIDATE_ERROR,data);
    }
}

class RTCIceConnectionStateChange extends AbstractCallMetric<{ from: string,to: string }>{
    constructor(sessionId: string,data: { from: string,to: string }) {
        super(sessionId,CallMetricsEvent.RTC_ICE_CONNECTION_STATE_CHANGED,data);
    }
}

class RTCIceGatheringStateChange extends AbstractCallMetric<{ from: string,to: string }>{
    constructor(sessionId: string,data: { from: string,to: string }) {
        super(sessionId,CallMetricsEvent.RTC_ICE_GATHERING_STATE_CHANGED,data);
    }
}

class RTCNegotiationNeeded extends AbstractCallMetric<any>{
    constructor(sessionId: string,data: any) {
        super(sessionId,CallMetricsEvent.RTC_NEGOTIATION_NEEDED,data);
    }
}

class RTCSignalingStateChanged extends AbstractCallMetric<{ from: string,to: string }>{
    constructor(sessionId: string,data: any) {
        super(sessionId,CallMetricsEvent.RTC_SIGNALING_STATE_CHANGED,data);
    }
}

class RTCTrack extends AbstractCallMetric<any>{
    constructor(sessionId: string,data: any) {
        super(sessionId,CallMetricsEvent.RTC_TRACK,data);
    }
}

class RTCRemovedFromElement extends AbstractCallMetric<{ reason: string }>{
    constructor(sessionId: string,data: any) {
        super(sessionId,CallMetricsEvent.STREAM_REMOVED_FROM_ELEMENT,data);
    }
}

class SocketStateChange extends AbstractCallMetric<{ connected: boolean }>{
    constructor(sessionId: string,data: any) {
        super(sessionId,CallMetricsEvent.SOCKET_STATE_CHANGED,data);
    }
}

class RingStateChange extends AbstractCallMetric<{ ringing: boolean,isInitiator: boolean }>{
    constructor(sessionId: string,data: { ringing: boolean,isInitiator: boolean }) {
        super(sessionId,CallMetricsEvent.RING_STATE_CHANGED,data);
    }
}

class CallClosed extends AbstractCallMetric<{ reason: string, isFromOtherSide: boolean }>{
    constructor(sessionId: string,data: { reason: string, isFromOtherSide: boolean }) {
        super(sessionId,CallMetricsEvent.CALL_CLOSED,data);
    }
}

class Log extends AbstractCallMetric<string>{
    constructor(sessionId: string,data: string) {
        super(sessionId,CallMetricsEvent.LOG,data);
    }
}

class LocalStreamsGathered extends AbstractCallMetric<{ audio: boolean,video: boolean }>{
    constructor(sessionId: string,data: { audio: boolean,video: boolean }) {
        super(sessionId,CallMetricsEvent.LOCAL_STREAMS_GATHERED,data);
    }
}

class NetworkStateChanged extends AbstractCallMetric<{ connected: boolean }>{
    constructor(sessionId: string,data: { connected: boolean }) {
        super(sessionId,CallMetricsEvent.NETWORK_STATE_CHANGED,data);
    }
}

interface InBoundAudioType{
    lastPacketReceivedTimestamp: number,
    bytesReceived: number,
    bitrate: number,
    jitter: number,
    jitterBufferDelay: number,
    packetsLost: number,
    packetsReceived: number,
    headerBytesReceived: number,
    mimeType: string,
    kind: string
}

interface OutBoundAudioType{
    packetsSent: number,
    bytesSent: number,
    headerBytesSent: number,
    mimeType: string,
    bitrate: number
}

interface InBoundVideoType{
    frameHeight: number,
    frameWidth: number,
    framesDecoded: number,
    framesDropped: number,
    framesPerSecond: number,
    framesReceived: number,
    lastPacketReceivedTimestamp: number,
    bytesReceived: number,
    bitrate: number,
    jitter: number,
    jitterBufferDelay: number,
    packetsLost: number,
    packetsReceived: number,
    headerBytesReceived: number,
    mimeType: string,
    kind: string
}

interface OutBoundVideoType{
    frameHeight: number,
    frameWidth: number,
    framesEncoded: number,
    framesPerSecond: number,
    framesSent: number,
    packetsSent: number,
    bytesSent: number,
    headerBytesSent: number,
    mimeType: string,
    bitrate: number
}

export default {
    AbstractCallMetric,
    Stats,
    Error,
    CameraSwitchClicked,
    MuteClicked,
    AudioRouteChanged,
    TrackStateChange,
    CallStateChange,
    RTCRemovedFromElement,
    RTCTrack,
    RTCSignalingStateChanged,
    RTCNegotiationNeeded,
    RTCIceGatheringStateChange,
    RTCIceCandidateError,
    RTCIceCandidate,
    RTCIceConnectionStateChange,
    RTCConnectionStateChange,
    SocketStateChange,
    RingStateChange,
    CallClosed,
    Log,
    LocalStreamsGathered,
    NetworkStateChanged,
    TrackStopped,
    TrackCreated
}

