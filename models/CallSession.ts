interface CallSession{
    id: string,
    host: string,
    type: 'video/audio' | 'audio',
    state: 'initiating' | 'transmitting' | 'ended',
    initiateDate: number,
    initiator: {id: string,outputUrl: string,inputUrl: string},
    receiver: {id: string,outputUrl: string,inputUrl: string},
}

export default CallSession;
