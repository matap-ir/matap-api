import {MedicalService} from '../../index';

export default interface ServerConfig {
    iceServers: {username: string,credential:string,urls:string[]}[],
    mediaConstraints:{},
    forceSpeaker: boolean,
    termsandconditions: string,
    android:{
        forceUpdate:boolean,
        versionCode:string,
        downloadLink: string,
        changeLog: string
    },
    ios:{
        forceUpdate:boolean,
        versionCode:string,
        downloadLink: string,
        changeLog: string
    }
}
