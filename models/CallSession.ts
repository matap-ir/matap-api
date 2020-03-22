interface CallSession{
    id: string,
    type: 'video/audio' | 'audio',
    state: 'initiating' | 'transmitting' | 'ended',
    initiateDate: number,
    from: {id:string,url:string},
    to: {id:string,url:string},
}

export default CallSession;
