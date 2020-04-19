interface CallOffer{
    id: string,
    host: string,
    type: 'video/audio' | 'audio',
    state: 'initiating' | 'transmitting' | 'ended',
    initiateDate: number,
    iceServers:{urls:string | string[],credential:string,username:string,password:string}[]
    initiator: {id: string},
    receiver: {id: string},
}

export default CallOffer;
