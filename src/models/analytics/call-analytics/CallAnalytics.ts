import {CallMetricsEvent, UserType} from '../../Enums';

export class AbstractCallMetric<T extends any>{
    public readonly sessionId: string;
    public readonly event: CallMetricsEvent;
    public readonly data?: T;
    public readonly timeStamp = Date.now();
    public userId!: string;

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

class AudioRouteChanged extends AbstractCallMetric<{ availableDevices: string[],selectedRoute: string }>{
    constructor(sessionId: string,data: { availableDevices: string[],selectedRoute: string }) {
        super(sessionId,CallMetricsEvent.AUDIO_ROUTE_CHANGED,data);
    }
}

class Ping extends AbstractCallMetric<{ server: string,result: number | false }>{
    constructor(sessionId: string,data: { server: string,result: number | false }) {
        super(sessionId,CallMetricsEvent.PING,data);
    }
}

class TrackStateChange extends AbstractCallMetric<{ kind: 'video' | 'audio',enabled: boolean, local: boolean }>{
    constructor(sessionId: string,data: { kind: 'video' | 'audio',enabled: boolean, local: boolean }) {
        super(sessionId,CallMetricsEvent.TRACK_STATE_CHANGED,data);
    }
}

class TrackCreated extends AbstractCallMetric<{ kind: 'audio' | 'video', local: boolean }>{
    constructor(sessionId: string,data: { kind: 'audio' | 'video', local: boolean }) {
        super(sessionId,CallMetricsEvent.TRACK_CREATED,data);
    }
}

class TrackStopped extends AbstractCallMetric<{ kind: 'audio' | 'video', local: boolean }>{
    constructor(sessionId: string,data: { kind: 'audio' | 'video', local: boolean }) {
        super(sessionId,CallMetricsEvent.TRACK_STOPPED,data);
    }
}

class CallStateChange extends AbstractCallMetric<{ from: 'connecting' | 'connected' | 'reconnecting',to: 'connecting' | 'connected' | 'reconnecting'}>{
    constructor(sessionId: string,data: { from: 'connecting' | 'connected' | 'reconnecting',to: 'connecting' | 'connected' | 'reconnecting'}) {
        super(sessionId,CallMetricsEvent.CALL_STATE_CHANGED,data);
    }
}

class RTCConnectionStateChange extends AbstractCallMetric<{ from: string,to: string }>{
    constructor(sessionId: string,data: { from: string,to: string }) {
        super(sessionId,CallMetricsEvent.RTC_CONNECTION_STATE_CHANGED,data);
    }
}

class RTCIceCandidate extends AbstractCallMetric<{ candidate: any }>{
    constructor(sessionId: string,data: { candidate: any }) {
        super(sessionId,CallMetricsEvent.RTC_ICE_CANDIDATE,data);
    }
}

class RTCIceCandidateError extends AbstractCallMetric<{ errorCode: string,errorText: string,hostCandidate: string,url: string }>{
    constructor(sessionId: string,data: { errorCode: string,errorText: string,hostCandidate: string,url: string }) {
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
    constructor(sessionId: string) {
        super(sessionId,CallMetricsEvent.RTC_NEGOTIATION_NEEDED);
    }
}

class RTCSignalingStateChanged extends AbstractCallMetric<{ from: string,to: string }>{
    constructor(sessionId: string,data: any) {
        super(sessionId,CallMetricsEvent.RTC_SIGNALING_STATE_CHANGED,data);
    }
}

class SocketStateChange extends AbstractCallMetric<{state: string}>{
    constructor(sessionId: string,data: {state: string}) {
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
    AudioRouteChanged,
    TrackStateChange,
    CallStateChange,
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
    NetworkStateChanged,
    TrackStopped,
    TrackCreated,
    Ping
}

