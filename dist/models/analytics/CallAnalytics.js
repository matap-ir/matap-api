"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("../Enums");
class AbstractCallMetric {
    constructor(sessionId, event, data) {
        this.timeStamp = Date.now();
        this.sessionId = sessionId;
        this.event = event;
        this.data = data;
    }
}
class Stats extends AbstractCallMetric {
    constructor(sessionId, stats) {
        super(sessionId, Enums_1.CallMetricsEvent.STATS, {
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
class Error extends AbstractCallMetric {
    constructor(sessionId, info, error) {
        super(sessionId, Enums_1.CallMetricsEvent.ERROR, { info, error });
    }
}
class AudioRouteChanged extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.AUDIO_ROUTE_CHANGED, data);
    }
}
class TrackStateChange extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.TRACK_STATE_CHANGED, data);
    }
}
class TrackCreated extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.TRACK_CREATED, data);
    }
}
class TrackStopped extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.TRACK_STOPPED, data);
    }
}
class CallStateChange extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.CALL_STATE_CHANGED, data);
    }
}
class RTCConnectionStateChange extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.RTC_CONNECTION_STATE_CHANGED, data);
    }
}
class RTCIceCandidate extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.RTC_ICE_CANDIDATE, data);
    }
}
class RTCIceCandidateError extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.RTC_ICE_CANDIDATE_ERROR, data);
    }
}
class RTCIceConnectionStateChange extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.RTC_ICE_CONNECTION_STATE_CHANGED, data);
    }
}
class RTCIceGatheringStateChange extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.RTC_ICE_GATHERING_STATE_CHANGED, data);
    }
}
class RTCNegotiationNeeded extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.RTC_NEGOTIATION_NEEDED, data);
    }
}
class RTCSignalingStateChanged extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.RTC_SIGNALING_STATE_CHANGED, data);
    }
}
class RTCTrack extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.RTC_TRACK, data);
    }
}
class SocketStateChange extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.SOCKET_STATE_CHANGED, data);
    }
}
class RingStateChange extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.RING_STATE_CHANGED, data);
    }
}
class CallClosed extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.CALL_CLOSED, data);
    }
}
class Log extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.LOG, data);
    }
}
class LocalStreamsGathered extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.LOCAL_STREAMS_GATHERED, data);
    }
}
class NetworkStateChanged extends AbstractCallMetric {
    constructor(sessionId, data) {
        super(sessionId, Enums_1.CallMetricsEvent.NETWORK_STATE_CHANGED, data);
    }
}
exports.default = {
    AbstractCallMetric,
    Stats,
    Error,
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
};
