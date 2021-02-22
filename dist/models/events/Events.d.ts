import { ConferenceDetectionEventTypes, ConferenceFeaturesEventTypes, ConferenceMediaDevicesEventTypes, ConferenceParticipantConnectionEventTypes, ConferenceParticipantPresenceEventTypes, ConferenceRoomEventTypes, ConferenceTrackEventTypes, EventType, NetworkEventTypes, SocketEventTypes, VisitStatus } from '../Enums';
declare namespace Events {
    class Conference {
        static readonly detection: typeof ConferenceDetectionEventTypes;
        static readonly features: typeof ConferenceFeaturesEventTypes;
        static readonly mediaDevices: typeof ConferenceMediaDevicesEventTypes;
        static readonly track: typeof ConferenceTrackEventTypes;
        static readonly room: typeof ConferenceRoomEventTypes;
        static readonly connection: typeof ConferenceParticipantConnectionEventTypes;
        static readonly presence: typeof ConferenceParticipantPresenceEventTypes;
    }
    class Visit {
        status: typeof VisitStatus;
        events: typeof EventType;
    }
    const network: typeof NetworkEventTypes;
    const socket: typeof SocketEventTypes;
    function on(events: string | string[], cb: (data: any) => void): void;
    function off<T extends any>(cb: (args: T) => void): void;
}
export default Events;
