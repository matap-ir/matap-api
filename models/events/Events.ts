import {
    ConferenceDetectionEventTypes,
    ConferenceFeaturesEventTypes,
    ConferenceMediaDevicesEventTypes,
    ConferenceParticipantConnectionEventTypes,
    ConferenceParticipantPresenceEventTypes,
    ConferenceRoomEventTypes,
    ConferenceTrackEventTypes, EventType, NetworkEventTypes, SocketEventTypes, VisitStatus
} from '../Enums';

namespace Events{
    const listeners: {[event: string]: ((args: any)=>void)[]} = {};

    export class Conference{
        public static readonly detection = ConferenceDetectionEventTypes;
        public static readonly features = ConferenceFeaturesEventTypes;
        public static readonly mediaDevices = ConferenceMediaDevicesEventTypes;
        public static readonly track = ConferenceTrackEventTypes;
        public static readonly room = ConferenceRoomEventTypes;
        public static readonly connection = ConferenceParticipantConnectionEventTypes;
        public static readonly presence = ConferenceParticipantPresenceEventTypes;
    }

    export class Visit {
        status = VisitStatus
        events = EventType
    }

    export const network = NetworkEventTypes;

    export const socket = SocketEventTypes;

    export function on(events: string | string[], cb: (data: any)=>void){
        [...events].forEach((e: string) => {
            listeners[e] = listeners[e] || [];
            !listeners[e].includes(cb) && listeners[e].push(cb);
        })
    }

    export function off<T extends any>(cb: (args: T)=>void){
        Object.keys(listeners).forEach((k)=>{
            listeners[k].removeValue(cb);
        })
    }
}

export default Events;
