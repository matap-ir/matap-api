import {CallStatEvent, UserType} from '../Enums';

abstract class AbstractCallMetric<T extends any>{
    public readonly userId: string;
    public readonly userType: UserType;
    public readonly event!: CallStatEvent;
    public readonly data: T;
    public readonly timeStamp = Date.now();

    constructor(userId: string, userType: UserType, data: T) {
        this.userId = userId;
        this.userType = userType;
        this.data = data;
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

class Stats extends AbstractCallMetric<{
    local:{
        audio:{inbound: InBoundAudioType[], outbound: OutBoundAudioType[] },
        video:{ inbound: InBoundVideoType[], outbound: OutBoundVideoType[] }
    },
    remote:{
        audio:{inbound: InBoundAudioType[], outbound: OutBoundAudioType[] },
        video:{ inbound: InBoundVideoType[], outbound: OutBoundVideoType[] }
    } }>{

    event = CallStatEvent.STATS;
}

export default {
    AbstractCallMetric,
    Stats
}
