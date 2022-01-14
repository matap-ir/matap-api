"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AbstractCallMetric = void 0;
var Enums_1 = require("../../Enums");
var AbstractCallMetric = /** @class */ (function () {
    function AbstractCallMetric(sessionId, event, data) {
        this.timeStamp = Date.now();
        this.sessionId = sessionId;
        this.event = event;
        this.data = data;
    }
    return AbstractCallMetric;
}());
exports.AbstractCallMetric = AbstractCallMetric;
var Stats = /** @class */ (function (_super) {
    __extends(Stats, _super);
    function Stats(sessionId, stats) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.STATS, {
            local: {
                audio: {
                    inbound: stats.data.audio.inbound.map(function (s) {
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
                    outbound: stats.data.audio.outbound.map(function (s) {
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
                    inbound: stats.data.video.inbound.map(function (s) {
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
                    outbound: stats.data.video.outbound.map(function (s) {
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
                    inbound: stats.data.remote.audio.inbound.map(function (s) {
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
                    outbound: stats.data.remote.audio.outbound.map(function (s) {
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
                    inbound: stats.data.remote.video.inbound.map(function (s) {
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
                    outbound: stats.data.remote.video.outbound.map(function (s) {
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
        }) || this;
    }
    return Stats;
}(AbstractCallMetric));
var Error = /** @class */ (function (_super) {
    __extends(Error, _super);
    function Error(sessionId, info, error) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.ERROR, { info: info, error: error }) || this;
    }
    return Error;
}(AbstractCallMetric));
var AudioRouteChanged = /** @class */ (function (_super) {
    __extends(AudioRouteChanged, _super);
    function AudioRouteChanged(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.AUDIO_ROUTE_CHANGED, data) || this;
    }
    return AudioRouteChanged;
}(AbstractCallMetric));
var Ping = /** @class */ (function (_super) {
    __extends(Ping, _super);
    function Ping(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.PING, data) || this;
    }
    return Ping;
}(AbstractCallMetric));
var TrackStateChange = /** @class */ (function (_super) {
    __extends(TrackStateChange, _super);
    function TrackStateChange(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.TRACK_STATE_CHANGED, data) || this;
    }
    return TrackStateChange;
}(AbstractCallMetric));
var TrackCreated = /** @class */ (function (_super) {
    __extends(TrackCreated, _super);
    function TrackCreated(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.TRACK_CREATED, data) || this;
    }
    return TrackCreated;
}(AbstractCallMetric));
var TrackStopped = /** @class */ (function (_super) {
    __extends(TrackStopped, _super);
    function TrackStopped(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.TRACK_STOPPED, data) || this;
    }
    return TrackStopped;
}(AbstractCallMetric));
var CallStateChange = /** @class */ (function (_super) {
    __extends(CallStateChange, _super);
    function CallStateChange(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.CALL_STATE_CHANGED, data) || this;
    }
    return CallStateChange;
}(AbstractCallMetric));
var RTCConnectionStateChange = /** @class */ (function (_super) {
    __extends(RTCConnectionStateChange, _super);
    function RTCConnectionStateChange(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.RTC_CONNECTION_STATE_CHANGED, data) || this;
    }
    return RTCConnectionStateChange;
}(AbstractCallMetric));
var RTCIceCandidate = /** @class */ (function (_super) {
    __extends(RTCIceCandidate, _super);
    function RTCIceCandidate(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.RTC_ICE_CANDIDATE, data) || this;
    }
    return RTCIceCandidate;
}(AbstractCallMetric));
var RTCIceCandidateError = /** @class */ (function (_super) {
    __extends(RTCIceCandidateError, _super);
    function RTCIceCandidateError(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.RTC_ICE_CANDIDATE_ERROR, data) || this;
    }
    return RTCIceCandidateError;
}(AbstractCallMetric));
var RTCIceConnectionStateChange = /** @class */ (function (_super) {
    __extends(RTCIceConnectionStateChange, _super);
    function RTCIceConnectionStateChange(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.RTC_ICE_CONNECTION_STATE_CHANGED, data) || this;
    }
    return RTCIceConnectionStateChange;
}(AbstractCallMetric));
var RTCIceGatheringStateChange = /** @class */ (function (_super) {
    __extends(RTCIceGatheringStateChange, _super);
    function RTCIceGatheringStateChange(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.RTC_ICE_GATHERING_STATE_CHANGED, data) || this;
    }
    return RTCIceGatheringStateChange;
}(AbstractCallMetric));
var RTCNegotiationNeeded = /** @class */ (function (_super) {
    __extends(RTCNegotiationNeeded, _super);
    function RTCNegotiationNeeded(sessionId) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.RTC_NEGOTIATION_NEEDED) || this;
    }
    return RTCNegotiationNeeded;
}(AbstractCallMetric));
var RTCSignalingStateChanged = /** @class */ (function (_super) {
    __extends(RTCSignalingStateChanged, _super);
    function RTCSignalingStateChanged(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.RTC_SIGNALING_STATE_CHANGED, data) || this;
    }
    return RTCSignalingStateChanged;
}(AbstractCallMetric));
var SocketStateChange = /** @class */ (function (_super) {
    __extends(SocketStateChange, _super);
    function SocketStateChange(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.SOCKET_STATE_CHANGED, data) || this;
    }
    return SocketStateChange;
}(AbstractCallMetric));
var RingStateChange = /** @class */ (function (_super) {
    __extends(RingStateChange, _super);
    function RingStateChange(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.RING_STATE_CHANGED, data) || this;
    }
    return RingStateChange;
}(AbstractCallMetric));
var CallClosed = /** @class */ (function (_super) {
    __extends(CallClosed, _super);
    function CallClosed(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.CALL_CLOSED, data) || this;
    }
    return CallClosed;
}(AbstractCallMetric));
var Log = /** @class */ (function (_super) {
    __extends(Log, _super);
    function Log(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.LOG, data) || this;
    }
    return Log;
}(AbstractCallMetric));
var NetworkStateChanged = /** @class */ (function (_super) {
    __extends(NetworkStateChanged, _super);
    function NetworkStateChanged(sessionId, data) {
        return _super.call(this, sessionId, Enums_1.CallMetricsEvent.NETWORK_STATE_CHANGED, data) || this;
    }
    return NetworkStateChanged;
}(AbstractCallMetric));
exports["default"] = {
    AbstractCallMetric: AbstractCallMetric,
    Stats: Stats,
    Error: Error,
    AudioRouteChanged: AudioRouteChanged,
    TrackStateChange: TrackStateChange,
    CallStateChange: CallStateChange,
    RTCSignalingStateChanged: RTCSignalingStateChanged,
    RTCNegotiationNeeded: RTCNegotiationNeeded,
    RTCIceGatheringStateChange: RTCIceGatheringStateChange,
    RTCIceCandidateError: RTCIceCandidateError,
    RTCIceCandidate: RTCIceCandidate,
    RTCIceConnectionStateChange: RTCIceConnectionStateChange,
    RTCConnectionStateChange: RTCConnectionStateChange,
    SocketStateChange: SocketStateChange,
    RingStateChange: RingStateChange,
    CallClosed: CallClosed,
    Log: Log,
    NetworkStateChanged: NetworkStateChanged,
    TrackStopped: TrackStopped,
    TrackCreated: TrackCreated,
    Ping: Ping
};
//# sourceMappingURL=CallAnalytics.js.map