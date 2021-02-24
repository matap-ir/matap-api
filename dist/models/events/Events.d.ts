import { ConferenceDetectionEventTypes, ConferenceFeaturesEventTypes, ConferenceMediaDevicesEventTypes, ConferenceParticipantConnectionEventTypes, ConferenceParticipantPresenceEventTypes, ConferenceRoomEventTypes, ConferenceTrackEventTypes, EventType, NetworkEventTypes, SocketEventTypes, VisitStatus } from '../Enums';
declare class Conference {
    static readonly detection: typeof ConferenceDetectionEventTypes;
    static readonly features: typeof ConferenceFeaturesEventTypes;
    static readonly mediaDevices: typeof ConferenceMediaDevicesEventTypes;
    static readonly track: typeof ConferenceTrackEventTypes;
    static readonly room: typeof ConferenceRoomEventTypes;
    static readonly connection: typeof ConferenceParticipantConnectionEventTypes;
    static readonly presence: typeof ConferenceParticipantPresenceEventTypes;
}
declare class Visit {
    status: typeof VisitStatus;
    events: typeof EventType;
}
export declare const network: typeof NetworkEventTypes;
export declare const socket: typeof SocketEventTypes;
declare function on(event: string | string[], cb: (data: any) => void): void;
declare function off<T extends any>(cb: (args: T) => void): void;
declare const _default: {
    Conference: typeof Conference;
    Visit: typeof Visit;
    network: typeof NetworkEventTypes;
    socket: typeof SocketEventTypes;
    on: typeof on;
    off: typeof off;
};
export default _default;
