import {
    ConferenceDetectionEventTypes,
    ConferenceFeaturesEventTypes,
    ConferenceMediaDevicesEventTypes,
    ConferenceParticipantConnectionEventTypes,
    ConferenceParticipantPresenceEventTypes,
    ConferenceRoomEventTypes,
    ConferenceTrackEventTypes, EventType, NetworkEventTypes, SocketEventTypes, VisitStatus
} from '../Enums';


    const listeners: {[event: string]: ((args: any)=>void)[]} = {};

    class Conference{
        public static readonly detection = ConferenceDetectionEventTypes;
        public static readonly features = ConferenceFeaturesEventTypes;
        public static readonly mediaDevices = ConferenceMediaDevicesEventTypes;
        public static readonly track = ConferenceTrackEventTypes;
        public static readonly room = ConferenceRoomEventTypes;
        public static readonly connection = ConferenceParticipantConnectionEventTypes;
        public static readonly presence = ConferenceParticipantPresenceEventTypes;
    }

    class Visit {
        status = VisitStatus
        events = EventType
    }

    export const network = NetworkEventTypes;

    export const socket = SocketEventTypes;

    function on(event: string | string[], cb: (data: any)=>void){
        [...event].forEach((e: string) => {
            listeners[e] = listeners[e] || [];
            !listeners[e].includes(cb) && listeners[e].push(cb);
        })
    }

    function off<T extends any>(cb: (args: T)=>void){
        Object.keys(listeners).forEach((k)=>{
            listeners[k].removeValue(cb);
        })
    }

export default {
    Conference,
    Visit,
    network,
    socket,
    on,
    off
};
