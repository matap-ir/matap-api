import {MedicalService} from '../../index';

export default interface ServerConfig {
    iceServers: {username: string,credential:string,urls:string[]}[],
    mediaConstraints:{},
    forceSpeaker: boolean
}
