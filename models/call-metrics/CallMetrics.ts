import {CallMetricsEvent, UserType} from '../Enums';

class AbstractCallMetric<T extends any>{
    public readonly userId!: string;
    public readonly userType!: UserType;
    public readonly event: CallMetricsEvent;
    public readonly data?: T;
    public readonly timeStamp = Date.now();
    public readonly browser?:{
        platform: string,
        version: string
    }
    public readonly mobile?:{
        platform: string,
        osVersion: string
    }

    constructor(event: CallMetricsEvent, data?: T) {
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

    constructor(stats) {
        super(CallMetricsEvent.STATS,{
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
        constructor(info: string,error: Error) {
            super(CallMetricsEvent.ERROR,{info, error});
        }
}

class CameraSwitchClicked extends AbstractCallMetric<{ currentDirection:'front' | 'back' }>{
    constructor(data: { currentDirection:'front' | 'back' }) {
        super(CallMetricsEvent.CAMERA_SWITCH_CLICKED,data);
    }
}

class MuteClicked extends AbstractCallMetric<{ isMuted: boolean }>{
    constructor(data: { isMuted:boolean }) {
        super(CallMetricsEvent.MUTE_CLICKED,data);
    }
}

class SpeakerClicked extends AbstractCallMetric<{ availableDevices: string[],selectedRoute: string }>{
    constructor(data: { availableDevices: string[],selectedRoute: string }) {
        super(CallMetricsEvent.SPEAKER_CLICKED,data);
    }
}

class TrackStateChange extends AbstractCallMetric<{ kind: 'audio' | 'video',enabled: boolean,removed: boolean }>{
    constructor(data: { kind: 'audio' | 'video',enabled: boolean,removed: boolean }) {
        super(CallMetricsEvent.TRACK_STATE_CHANGED,data);
    }
}

class CallStateChange extends AbstractCallMetric<{ before: 'connecting' | 'connected' | 'reconnecting',new: 'connecting' | 'connected' | 'reconnecting'}>{
    constructor(data: { before: 'connecting' | 'connected' | 'reconnecting',new: 'connecting' | 'connected' | 'reconnecting'}) {
        super(CallMetricsEvent.CALL_STATE_CHANGED,data);
    }
}

class RTCConnectionStateChange extends AbstractCallMetric<{ from: string,to: string }>{
    constructor(data: { from: string,to: string }) {
        super(CallMetricsEvent.RTC_CONNECTION_STATE_CHANGED,data);
    }
}

class RTCIceCandidate extends AbstractCallMetric<{ candidate: string }>{
    constructor(data: { candidate: string }) {
        super(CallMetricsEvent.RTC_ICE_CANDIDATE,data);
    }
}

class RTCIceCandidateError extends AbstractCallMetric<{ error: string }>{
    constructor(data: { error: string }) {
        super(CallMetricsEvent.RTC_ICE_CANDIDATE_ERROR,data);
    }
}

class RTCIceConnectionStateChange extends AbstractCallMetric<{ from: string,to: string }>{
    constructor(data: { from: string,to: string }) {
        super(CallMetricsEvent.RTC_ICE_CONNECTION_STATE_CHANGED,data);
    }
}

class RTCIceGatheringStateChange extends AbstractCallMetric<{ from: string,to: string }>{
    constructor(data: { from: string,to: string }) {
        super(CallMetricsEvent.RTC_ICE_GATHERING_STATE_CHANGED,data);
    }
}

class RTCNegotiationNeeded extends AbstractCallMetric<any>{
    constructor(data: any) {
        super(CallMetricsEvent.RTC_NEGOTIATION_NEEDED,data);
    }
}

class RTCSignalingStateChanged extends AbstractCallMetric<{ from: string,to: string }>{
    constructor(data: any) {
        super(CallMetricsEvent.RTC_SIGNALING_STATE_CHANGED,data);
    }
}

class RTCTrack extends AbstractCallMetric<any>{
    constructor(data: any) {
        super(CallMetricsEvent.RTC_TRACK,data);
    }
}

class RTCRemovedFromElement extends AbstractCallMetric<{ reason: string }>{
    constructor(data: any) {
        super(CallMetricsEvent.STREAM_REMOVED_FROM_ELEMENT,data);
    }
}

class SocketStateChange extends AbstractCallMetric<{ connected: boolean }>{
    constructor(data: any) {
        super(CallMetricsEvent.SOCKET_STATE_CHANGED,data);
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
    SpeakerClicked,
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
    SocketStateChange
}

