import { CallStatEvent, UserType } from '../Enums';
declare abstract class AbstractCallMetric<T extends any> {
    readonly userId: string;
    readonly userType: UserType;
    readonly event: CallStatEvent;
    readonly data: T;
    readonly timeStamp: number;
    constructor(userId: string, userType: UserType, data: T);
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
    event: CallStatEvent;
}
declare const _default: {
    AbstractCallMetric: typeof AbstractCallMetric;
    Stats: typeof Stats;
};
export default _default;
